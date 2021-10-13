//Importacion de los servicios que usaremos en la aplicacion(aunque estamos usando firebase v9, usaremos las version compat para usar las caracteristicas de la v8).
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

//Configuracion de las credenciales de nuestra app de firebase, para hacer la 'conexion'.
const config = {
  apiKey: "AIzaSyAskjmUru6MUqqN_2VHYe9q_yWBRhRPgL0",
  authDomain: "recepy-application-cb38f.firebaseapp.com",
  projectId: "recepy-application-cb38f",
  storageBucket: "recepy-application-cb38f.appspot.com",
  messagingSenderId: "446788631186",
  appId: "1:446788631186:web:7bf3bcf200b16a01dc844b",
  measurementId: "G-RJ58NTXEEJ"
};

//Inicializacion de la aplicacion.
const app = firebase.initializeApp(config);

//Configuracion de firebase firestore para usarlo como objeto en nuestra app.
export const dataBase = firebase.firestore(app);

//Configuracion de firebase storage para usarlo como objeto en nuestra app.
export const storage = firebase.storage(app);