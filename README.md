# capston-project
## Afrimeds: Digitalized Traditional Knowledge
### About the Project
Afrimeds is an interactive and multilingual web application dedicated to documenting and preserving traditional medicinal knowledge from Côte d'Ivoire. This project aims to safeguard a rich cultural heritage threatened by rapid urbanization and modernization, by providing a digital platform that documents traditional medicinal plants, their therapeutic uses, and preparation methods.
## GitHub Repository
[https://github.com/LYCE899/capston-project]

## Table of Contents
#### Features
#### Technologies Used
#### Installation
#### Project Structure
#### Usage
#### Current Project Status
#### Future Developments

## Features
- Catalog of traditional medicinal plants from Côte d'Ivoire
- Detailed plant profiles with medicinal properties
- Multilingual interface (French, English)
- Secure user authentication system
- Comment system for remedies
- Dedicated sections for plants, tips, and remedies
- Responsive navigation across all devices
  
## Technologies Used
### Frontend:
- React.js - JavaScript library for user interface
- Tailwind CSS - CSS framework for responsive design
- Firebase Authentication - For user management
- i18next - For multilingual support (French and English)
  
## Backend:
- Firebase Firestore - NoSQL database to store plant information and comments

### Clone the repository to your local machine

git clone [(https://github.com/LYCE899/capston-project.git)] 

cd afrimeds;

### Install dependencies
   - npm install
     
### Create a .env file at the root of the project with your Firebase information
- REACT_APP_FIREBASE_API_KEY=your-api-key
- REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
- REACT_APP_FIREBASE_PROJECT_ID=your-project-id
- REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
- REACT_APP_FIREBASE_APP_ID=your-app-id

### Launch the application in development mode
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

## Usage
### Getting Started & Authentication
When you first access the application, you'll see a welcome page
Click on the "GET STARTED" button to proceed to the sign-in page
### On the sign-in page:
If you already have an account, enter your credentials and click "Sign In"
If you're new, create your account by clicking on the registration option
After signing in, you'll be directed to the home page where you can navigate through the platform
### Plants page
Navigate to "Plants"  in the main menu
Browse the list of available medicinal plants (currently 8 documented plants)
Click on a plant to see its detailed page
### Remedy Page Structure
Each remedy page is organized in a clean, intuitive layout:
###### Image 
- Visual representation of the medicinal plant at the top
Information
- Detailed description, uses, and preparation methods
###### Comments Section
- Located directly below the remedy information where users can:
Read existing comments from other users
Add their own comments and feedback
Like or interact with comments
### Changing Language
Click on the language button (FR/EN) in the navigation bar
The application content will automatically be translated into the selected language

## Current Project Status
The current version of Afrimeds includes the following features:
-Secure user authentication with Firebase
- Catalog of 8 medicinal plants from Côte d'Ivoire
- Detailed pages for each plant
- Functional comment system for remedies
- Multilingual support (French and English)
- Responsive interface
- Navigation between different sections (Home, Plants, Tips, Remedies, About)

## Future Developments
Here are the features planned for upcoming versions:
- Interactive quiz section to test users' knowledge
- Improvement of the plant search functionality
- Increase in the number of documented plants and remedies
- Addition of local dialects in language options
- Integration of an interactive map showing the geographical distribution of plants
- Rating system for remedies by users
- Optimization of application performance


![image commencer](https://github.com/user-attachments/assets/8f8f97d4-154f-4a51-8baf-1b44a9a4dffc)
![creer compte image](https://github.com/user-attachments/assets/85a7e881-2db5-4ab5-8a5b-25400142e357)
![se conecter a sont comptes image](https://github.com/user-attachments/assets/2b096176-4048-4f7b-8911-6f8b52e276e2)
![image changer la langue](https://github.com/user-attachments/assets/63868b8d-5e0a-482f-ae40-f0e0b55422ad)
![choix de la page image](https://github.com/user-attachments/assets/d2d57380-d3ac-4d3a-a9cf-3c04c09cb974)
![plante page image](https://github.com/user-attachments/assets/2985e91d-c3f4-44b4-a379-c180927691eb)
![remedes page image](https://github.com/user-attachments/assets/67df45b2-9d82-4ffd-bf55-43000ae02218)
 ![auth1 image](https://github.com/user-attachments/assets/42cc141c-1972-44a7-88be-1925637366d0)
 ![data 1 image](https://github.com/user-attachments/assets/68c02fe8-a4ef-4db2-9f90-a0c660895a91)
 
## demo
[first video](https://drive.google.com/file/d/1L-xQ1YzE7l86Sp0zeF4_fW-tFwgPGrjz/view?usp=sharing)

## demo for Final version of the product/solution!
[Watch the Afrimeds Demo Video](https://drive.google.com/file/d/1L-xQ1YzE7l86Sp0zeF4_fW-tFwgPGrjz/view?usp=sharing)

## Link to deployed app 
[https://capston-project-hb1n.vercel.app/]
