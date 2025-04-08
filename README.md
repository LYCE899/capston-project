# capston-project
## Afrimeds: Digitalized Traditional Knowledge
### About the Project
Afrimeds is an interactive and multilingual web application dedicated to documenting and preserving traditional medicinal knowledge from Côte d'Ivoire. This project aims to safeguard a rich cultural heritage threatened by rapid urbanization and modernization, by providing a digital platform that documents traditional medicinal plants, their therapeutic uses, and preparation methods.
## GitHub Repository
[https://github.com/LYCE899/capston-project]
  
## Technologies Used
### Frontend:
- React.js & typscript  - JavaScript library for user interface
- Tailwind CSS - CSS framework for responsive design
- Firebase Authentication - For user management, database and hosting
- i18next - For multilingual support (French and English)
  
## Backend:
- Firebase Firestore - NoSQL database to store Quizresults and comments

### Clone the repository to your local machine
```bash
git clone [(https://github.com/LYCE899/capston-project.git)]

```bash
cd afrimeds

 ### Install dependence 
```bash
   npm install
     
### Create a .env file at the root of the project with your Firebase information
```bash
- REACT_APP_FIREBASE_API_KEY=your-api-key
- REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
- REACT_APP_FIREBASE_PROJECT_ID=your-project-id
- REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
- REACT_APP_FIREBASE_APP_ID=your-app-id

### Launch the application in development mode
```bash
npm run dev

The application will be accessible at http://localhost:5173.

## Project Structure
The project is organized with a navigation bar containing the following sections:
- Home: Homepage of the application
- Plants: Catalog of medicinal plants with search function
- Tips: Practical advice on using medicinal plants
- Remedies: Documented traditional remedies with comment system
- Quizzes: Section to test knowledge (in development)
- About: Information about the project
- Language selector: Allows switching between French and English
- Sign Out: Logout button for authenticated users
Each plant has its own detailed page accessible by clicking on its entry in the plant list.

![image du welcomepage](https://github.com/user-attachments/assets/81ea266d-729e-4d7a-b788-440086c2c0c0)
![creer compte image](https://github.com/user-attachments/assets/85a7e881-2db5-4ab5-8a5b-25400142e357)
![se conecter a sont comptes image](https://github.com/user-attachments/assets/2b096176-4048-4f7b-8911-6f8b52e276e2)
![image changer la langue](https://github.com/user-attachments/assets/63868b8d-5e0a-482f-ae40-f0e0b55422ad)
![choix de la page image](https://github.com/user-attachments/assets/d2d57380-d3ac-4d3a-a9cf-3c04c09cb974)
![plante page image](https://github.com/user-attachments/assets/2985e91d-c3f4-44b4-a379-c180927691eb)
![remedes page image](https://github.com/user-attachments/assets/67df45b2-9d82-4ffd-bf55-43000ae02218)
![auth1 image](https://github.com/user-attachments/assets/42cc141c-1972-44a7-88be-1925637366d0)
![data 1 image](https://github.com/user-attachments/assets/68c02fe8-a4ef-4db2-9f90-a0c660895a91)
 
## Link to deployed app 
[https://capston-project-hb1n.vercel.app/](https://capston-project-hb1n.vercel.app/)
