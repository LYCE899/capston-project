const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
require('dotenv').config();

// Initialiser l'application Express
const app = express();
app.use(cors());
app.use(express.json());

// Initialiser Firebase Admin avec un compte de service
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Middleware d'authentification
const authenticateUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
      return res.status(403).send({ error: 'Non autorisé' });
    }

    const idToken = req.headers.authorization.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    return next();
  } catch (error) {
    return res.status(403).send({ error: 'Non autorisé' });
  }
};

// Routes pour les commentaires
app.get('/api/comments', async (req, res) => {
  try {
    const commentsSnapshot = await db.collection('comments').orderBy('createdAt', 'desc').get();
    const comments = [];
    commentsSnapshot.forEach(doc => {
      comments.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get('/api/comments/remedy/:remedyId', async (req, res) => {
  try {
    const remedyId = req.params.remedyId;
    const commentsSnapshot = await db.collection('comments')
      .where('remedyId', '==', remedyId)
      .orderBy('createdAt', 'desc')
      .get();
    
    const comments = [];
    commentsSnapshot.forEach(doc => {
      comments.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post('/api/comments', authenticateUser, async (req, res) => {
  try {
    const { content, remedyId } = req.body;
    const comment = {
      content,
      remedyId,
      userId: req.user.uid,
      userName: req.user.displayName || req.user.email.split('@')[0],
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      likes: 0,
      likedBy: []
    };
    
    const docRef = await db.collection('comments').add(comment);
    return res.status(201).json({
      id: docRef.id,
      ...comment
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post('/api/comments/:id/like', authenticateUser, async (req, res) => {
  try {
    const commentId = req.params.id;
    const userId = req.user.uid;
    
    // Récupérer le commentaire
    const commentDoc = await db.collection('comments').doc(commentId).get();
    
    if (!commentDoc.exists) {
      return res.status(404).json({ error: 'Commentaire non trouvé' });
    }
    
    const commentData = commentDoc.data();
    const likedBy = commentData.likedBy || [];
    
    // Vérifier si l'utilisateur a déjà aimé ce commentaire
    if (likedBy.includes(userId)) {
      // Retirer le like
      await db.collection('comments').doc(commentId).update({
        likedBy: admin.firestore.FieldValue.arrayRemove(userId),
        likes: admin.firestore.FieldValue.increment(-1)
      });
      return res.status(200).json({ message: 'Like retiré avec succès' });
    } else {
      // Ajouter le like
      await db.collection('comments').doc(commentId).update({
        likedBy: admin.firestore.FieldValue.arrayUnion(userId),
        likes: admin.firestore.FieldValue.increment(1)
      });
      return res.status(200).json({ message: 'Like ajouté avec succès' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.put('/api/comments/:id', authenticateUser, async (req, res) => {
  try {
    const commentId = req.params.id;
    const { content } = req.body;
    
    // Vérifier que l'utilisateur est bien l'auteur du commentaire
    const commentDoc = await db.collection('comments').doc(commentId).get();
    
    if (!commentDoc.exists) {
      return res.status(404).json({ error: 'Commentaire non trouvé' });
    }
    
    const commentData = commentDoc.data();
    if (commentData.userId !== req.user.uid) {
      return res.status(403).json({ error: 'Non autorisé à modifier ce commentaire' });
    }
    
    await db.collection('comments').doc(commentId).update({
      content,
      editedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    return res.status(200).json({ id: commentId, message: 'Commentaire mis à jour avec succès' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.delete('/api/comments/:id', authenticateUser, async (req, res) => {
  try {
    const commentId = req.params.id;
    
    // Vérifier que l'utilisateur est bien l'auteur du commentaire ou un admin
    const commentDoc = await db.collection('comments').doc(commentId).get();
    
    if (!commentDoc.exists) {
      return res.status(404).json({ error: 'Commentaire non trouvé' });
    }
    
    const commentData = commentDoc.data();
    const isAdmin = req.user.admin === true; // Vérifier si l'utilisateur est admin
    
    if (commentData.userId !== req.user.uid && !isAdmin) {
      return res.status(403).json({ error: 'Non autorisé à supprimer ce commentaire' });
    }
    
    await db.collection('comments').doc(commentId).delete();
    
    return res.status(200).json({ message: 'Commentaire supprimé avec succès' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Port pour le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});