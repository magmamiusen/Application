import Head from 'next/head';
import Add from '../database/Add';
import Get from '../database/Get';
import LogoutButton from '../auth/Logout';

const Feed = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Main home from Recepy Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Add />
                <Get type={user.name} />
                <Get type="Pasteleria" />
                <Get type="Vegetariano" />
                <LogoutButton />
            </main>
        </div>
    );
};

export default Feed;