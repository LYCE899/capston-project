# capston-project
## Afrimeds: Digitalized Traditional Knowledge
### About the Project
Afrimeds is an interactive and multilingual web application dedicated to documenting and preserving traditional medicinal knowledge from Côte d'Ivoire. This project aims to safeguard a rich cultural heritage threatened by rapid urbanization and modernization, by providing a digital platform that documents traditional medicinal plants, their therapeutic uses, and preparation methods.
Table of Contents
## Features
Technologies Used
Installation
Project Structure
Usage
Current Project Status
Future Developments
Contributors
License
Features
Catalog of traditional medicinal plants from Côte d'Ivoire
Detailed plant profiles with medicinal properties
Multilingual interface (French, English)
Secure user authentication system
Comment system for remedies
Dedicated sections for plants, tips, and remedies
Responsive navigation across all devices
Technologies Used
Frontend:
React.js - JavaScript library for user interface
Tailwind CSS - CSS framework for responsive design
Firebase Authentication - For user management
i18next - For multilingual support (French and English)
Backend:
Firebase Firestore - NoSQL database to store plant information and comments
Installation
Follow these steps to install and run the project locally:
Clone the repository to your local machine
bash
Copy
git clone https://github.com/your-name/afrimeds.git
cd afrimeds
Install dependencies
bash
Copy
npm install
Create a .env file at the root of the project with your Firebase information
Copy
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Launch the application in development mode
bash
Copy
npm start
The application will be accessible at http://localhost:3000.
Project Structure
The project is organized with a navigation bar containing the following sections:
Home: Homepage of the application
Plants: Catalog of medicinal plants with search function
Tips: Practical advice on using medicinal plants
Remedies: Documented traditional remedies with comment system
Quizzes: Section to test knowledge (in development)
About: Information about the project
Language selector: Allows switching between French and English
Sign Out: Logout button for authenticated users
Each plant has its own detailed page accessible by clicking on its entry in the plant list.
Usage
Authentication
Access the homepage
Click on "Sign In" or "Register" in the navigation bar
Follow the instructions to create an account or log in
Browsing Plants and Remedies
Navigate to "Plants" or "Remedies" in the main menu
Browse the list of available medicinal plants (currently 8 documented plants)
Click on a plant to see its complete details
Comments
Log in to your account
Access a remedy page
Scroll down to the comments section
Add your comment and/or like existing comments
Changing Language
Click on the language button (FR/EN) in the navigation bar
The application content will automatically be translated into the selected language
Current Project Status
The current version of Afrimeds includes the following features:
✅ Secure user authentication with Firebase
✅ Catalog of 8 medicinal plants from Côte d'Ivoire
✅ Detailed pages for each plant
✅ Functional comment system for remedies
✅ Multilingual support (French and English)
✅ Responsive interface
✅ Navigation between different sections (Home, Plants, Tips, Remedies, About)
Future Developments
Here are the features planned for upcoming versions:
🔄 Interactive quiz section to test users' knowledge
🔄 Improvement of the plant search functionality
🔄 Increase in the number of documented plants and remedies
🔄 Addition of local dialects in language options
🔄 Integration of an interactive map showing the geographical distribution of plants
🔄 Rating system for remedies by users
🔄 Optimization of application performance
🔄 Deployment of the application on Firebase Hosting
Contributors
Amani Coulibaly - Lead Developer and Researcher
Dr. Aaron A. Izang - Academic Supervisor
License
This project is licensed under the MIT License.

© 2025 Afrimeds | BSc. in Software Engineering, ALU
