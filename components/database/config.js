//Importacion de los servicios que usaremos en la aplicacion(aunque estamos usando firebase v9, usaremos las version compat para usar las caracteristicas de la v8).
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

//Configuracion de las credenciales de nuestra app de firebase, para hacer la 'conexion'.
const config = {
  apiKey: "AIzaSyB2xwN8OfA6cD-_zgfI-i5VxLbyk3HubDA",
  authDomain: "recepy-aplication-v1.firebaseapp.com",
  projectId: "recepy-aplication-v1",
  storageBucket: "recepy-aplication-v1.appspot.com",
  messagingSenderId: "869757248389",
  appId: "1:869757248389:web:6a899f12e9913bb04b9aec",
  measurementId: "G-WT0XGC5HX8"
};

//Inicializacion de la aplicacion.
const app = firebase.initializeApp(config);

//Configuracion de firebase firestore para usarlo como objeto en nuestra app.
export const dataBase = firebase.firestore(app);

//Configuracion de firebase storage para usarlo como objeto en nuestra app.
export const storage = firebase.storage(app);