// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZHhsAlUxpdpZ8M7-f91-1I4hIuBOYI0I",
    authDomain: "wedding-event-management-4eea7.firebaseapp.com",
    projectId: "wedding-event-management-4eea7",
    storageBucket: "wedding-event-management-4eea7.appspot.com",
    messagingSenderId: "842078475728",
    appId: "1:842078475728:web:076817dcc2719ec9a795d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;