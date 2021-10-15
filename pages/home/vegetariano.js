import Footer from '../../components/Footer';
import GetType from '../../components/database/GetType';

const Pasteleria = () => {
    return (
        <div>
            <GetType type="Vegetariano" />
            <Footer />
        </div>
    );
};

export default Pasteleria;