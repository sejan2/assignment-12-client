import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const firstAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default firstAuthentication;