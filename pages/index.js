import Head from 'next/head';
import Add from '../components/database/Add';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from '../components/auth/Login';
import LogoutButton from '../components/auth/Logout';

const Home = () => {
  
  return (
    <Auth0Provider domain="dev-dou8wmxc.us.auth0.com" clientId="OSpj6EyQBe7rD681JugQsNWIFVT76U48" redirectUri="http://localhost:3000" >
      <div>
        <Head>
          <title>Home</title>
          <meta name="description" content="Main home from Recepy Application" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <LoginButton />
          <LogoutButton />
          <Add />
        </main>
      </div>
    </Auth0Provider>
  );

};

export default Home;