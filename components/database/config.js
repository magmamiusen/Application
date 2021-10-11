//Importacion de los servicios que usaremos en la aplicacion(aunque estamos usando firebase v9, usaremos las version compat para usar las caracteristicas de la v8).
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

//Configuracion de las credenciales de nuestra app de firebase, para hacer la 'conexion'.
const config = {
  apiKey: "AIzaSyDHF2JXEaeQ2p_RjiPJBkORE50RRmQhhBU",
  authDomain: "application-8aa90.firebaseapp.com",
  projectId: "application-8aa90",
  storageBucket: "application-8aa90.appspot.com",
  messagingSenderId: "864511441334",
  appId: "1:864511441334:web:a4b4441b8813a150eba917",
  measurementId: "G-FMPRN55KT2"
};

//Inicializacion de la aplicacion.
const app = firebase.initializeApp(config);

//Configuracion de firebase firestore para usarlo como objeto en nuestra app.
export const dataBase = firebase.firestore(app);

//Configuracion de firebase storage para usarlo como objeto en nuestra app.
export const storage = firebase.storage(app);