//Importacion del hook proporcionado por Auth0.
import { useAuth0 } from '@auth0/auth0-react';
import style from '../../styles/auth/Login.module.scss';

//Componente padre para la utenticacion con Auth0
const LoginButton = () => {
  //Uso del hook, para redirigir al usuario al formulario de autenticacion.
  const { loginWithRedirect } = useAuth0();

  //Boton de para ejecutar la redireccion.
  return ( 
    <button 
      onClick={
        () => loginWithRedirect()
      }
      className={ style.button }
    >
      Log In
    </button>
  );
};

//Exportacion del componente LoginButton.
export default LoginButton;