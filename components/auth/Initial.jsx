//Importaciones de los componentes.
import { useAuth0 } from '@auth0/auth0-react';
import Feed from '../content/Feed';

//Componente Initial, que carga la aplicacion cuando el usuario esta autenticado.
const Initial = () => {
  //Uso del hook de Auth0, para estraer el estado del usuario.
  const { isAuthenticated, isLoading } = useAuth0();

  //Cuando el usuario ha sido autenticado con Auth0, aparecera cargando la informacion.
  if (isLoading) {
    return (
      <div>
        Loading ...
      </div>
    );
  };

  //Cuando esta autenticado y ya ha cargado, se renderizara el componente Feed.
  return (
    isAuthenticated && (
      <Feed />
    )
  );
};

//Exportacion del componente Initial
export default Initial;