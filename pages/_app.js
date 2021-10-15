//Importacion del estilo global de la aplicacion.
import '../styles/global/style.scss';

/*Componente inicializador de la aplicacion.
Este componente recibe toda la informacion de nuestras paginas para renderizarlas.*/
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

//Exportacion del componente MyApp
export default MyApp;