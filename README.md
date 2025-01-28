<<<<<<< HEAD
=======
# React + Vite

>>>>>>> 37246d7d7e24af15f2323da6937fc63505fdb359
Objective
Build a MovieApp using ReactJS, Firebase and Vite.

Topics to be Covered
HTML

CSS

JavaScript

ReactJS

Firebase

Vite

Learning Goals
By the end of the project, students will be able to:

Improve coding skills with HTML, CSS, JavaScript, and ReactJS.
Use React Router for navigation.
Implement Firebase Authentication for user management.
Use context for state management.
Fetch data from the Movie Database API and display the data through rendering cards.
Create and use custom hooks.
Use git commands (push, pull, commit, add, etc.) and GitHub as a Version Control System.
Steps to Solution
Step 1: Set Up the Project
Install Vite:

npm create vite@latest movie-app --template react
cd movie-app
Install Dependencies:

npm install
npm install axios react-router-dom
Start the Development Server:

npm run dev
Step 2: Set Up Firebase Authentication
Signup for Firebase:

Go to Firebase and create a new project.
Add Firebase SDK:

Follow the instructions on the Firebase console to add Firebase SDK to your project.
Initialize Firebase Authentication:

Inside the AuthContext handle authentication with Firebase SDKs:
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
Firebase Authentication Methods:

Use the following methods in your components for authentication operations:
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from 'firebase/auth';

// Create a state to store current user
const [currentUser, setCurrentUser] = useState(null);

// Create a User
const registerUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName });
      setCurrentUser(auth.currentUser);
      console.log(auth.user);
    } catch (error) {
      console.log(error.message);
    }
  };

// Sign In User
const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

// Auth State Observer

const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        setCurrentUser(false);
      }
    });
  };

useEffect(() => {
    // start the execution of userObserver when the application rendered for the first time
    userObserver();
  }, []);

// Google Sign-In
const signUpProvider = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

// Sign Out
const logOut = () => {
    signOut(auth);
    console.log('Logged out successfully !');
  };

// forgot password
const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password resent link sent. Please check your email!');
    } catch (error) {
      console.log(error.message);
    }
  };
Step 3: Fetch Data from the Movie Database API
Signup for the Movie Database API:

Go to The Movie Database (TMDb) and get your API key.
Fetch Data with Axios:

Use the following endpoints to fetch movie data:
const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";

// Discover Movies
const discoverMoviesUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;

// Search Movies
const searchMoviesUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;

// Movie Details including the movie videos
const movieDetailsUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;

// Image Access
const IMG_API_URL = 'https://image.tmdb.org/t/p/w1280';
Step 4: Project Structure
Create the necessary project structure and files:
auth folder with firebase.js
components folder with MovieCard.js and Navbar.js
context folder with AuthContext.js
pages folder with Login.js, Register.js, Home.js, and MovieDetail.js
router folder with Router.js
Step 5: Build the Components
Navbar Component:
Create a navbar component for navigation.
MovieCard Component:
Create a movie card component to display individual movies.
Home Component:
Create a main component to display a list of movies.
MovieDetail Component:
Create a movie detail component to show detailed movie information.
Login Component:
Create a login component for user authentication.
Register Component:
Create a register component for user registration.
Step 6: Use Context for State Management
Create an AuthContext:
Set up an AuthContext for managing authentication state across the app.
Provide Context:
Wrap the app with the AuthContext provider to make state accessible throughout the app.
Step 7: Custom Hooks
Create Custom Hooks:
Create custom hooks to manage API calls and state logic.
Step 8: Style the Application
Use App.css and index.css to style the components and layout of the application.
Optionally, use CSS frameworks like Bootstrap, Semantic UI, or Material UI for additional styling.
Step 9: Finalize and Deploy
Push to GitHub:

git add .
git commit -m "first commit"
git branch -M main
git remote add origin ***your_repository_link***
git push -u origin main
Add Project GIF:

Add the provided project GIF to your project and update the README.md file.
Deploy to Vercel or Netlify:

Follow the instructions for deploying a Vite project on Vercel or Netlify.
Notes
Here is a working example with Bootstrap.
Here is a working example with Tailwind CSS.
Feel free to add additional functionalities and improve the app further.