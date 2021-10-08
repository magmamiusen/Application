import { useAuth0 } from "@auth0/auth0-react";
import Feed from "../interface/feed";

const Initial = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Feed />
    )
  );
};

export default Initial;