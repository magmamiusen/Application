import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../components/auth/Login";
import Initial from "../components/auth/Initial";

const Index = () => {
  return (
    <Auth0Provider domain="dev-dou8wmxc.us.auth0.com" clientId="OSpj6EyQBe7rD681JugQsNWIFVT76U48" redirectUri="https://application-pink.vercel.app/" >
      <div>
        <LoginButton />
        <Initial />
      </div>
    </Auth0Provider>
  );
};

export default Index;