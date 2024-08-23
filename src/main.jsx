
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { MovieProvider } from './context/MovieContext.jsx';
//? required for Toastify
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <AuthProvider>
       <MovieProvider>
         <App />
       </MovieProvider>
   </AuthProvider>
    <ToastContainer/>
 </BrowserRouter>
   
 
)
/* to use toastify in our app: we need :
1- npm install toastify 
2- add this in main.jsx
   import 'react-toastify/dist/ReactToastify.css';
   import {ToastContainer} from "react-toastify"; 
   wrapp the App with :  <ToastContainer/> in main.jsx*/ 

   /* to use tailwind ,the steps in tailwind css page:
   1- in terminal: npm install -D tailwindcss postcss autoprefixer
                   npx tailwindcss init -p   */
  //  2- in tailwind.config.js :put  (  "./index.html",
  //           "./src/**/*.{js,ts,jsx,tsx}",)
 /*  3-in index.css: @tailwind base;
                  @tailwind components;
                  @tailwind utilities;  */
              
             