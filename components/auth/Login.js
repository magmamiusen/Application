//Importacion del hook proporcionado por Auth0.
import { useAuth0 } from '@auth0/auth0-react';

//Componente padre para la utenticacion con Auth0
const LoginButton = () => {
  //Uso del hook, para redirigir al usuario al formulario de autenticacion.
  const { loginWithRedirect } = useAuth0();

  //Boton de para ejecutar la redireccion.
  return ( 
    <button onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

//Exportacion del componente LoginButton.
export default LoginButton;