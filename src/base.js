import Rebase from 're-base'
import {initializeApp}  from 'firebase/app'
import {getDatabase} from 'firebase/database';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDyQz-DirT5R0ftAEaq0qNG2WPwMs9CTQ0",
    authDomain: "todoapp-91593.firebaseapp.com",
    databaseURL: "https://todoapp-91593-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todoapp-91593",
    storageBucket: "todoapp-91593.appspot.com",
    messagingSenderId: "70855312997",
    appId: "1:70855312997:web:4ab235f87bcdefa81ca88c",
    measurementId: "G-84CM61HF2D"
  });
  
const database = getDatabase(firebaseApp);

const base = Rebase.createClass(database);
export {firebaseApp};
export default base;