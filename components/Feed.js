import Head from 'next/head';
import Add from './database/Add';
import Get from './database/Get';
import LogoutButton from './auth/Logout';
import { useAuth0 } from '@auth0/auth0-react';

const Feed = () => {
    const { user } = useAuth0();

    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Main home from Recepy Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Get type="Pasteleria" />
                <Get type="Vegetariano" />
            </main>
        </div>
    );
};

export default Feed;