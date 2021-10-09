import { useState } from 'react';
import { dataBase } from './config';
import { motion } from 'framer-motion';
import style from '../../styles/Get.module.scss';
import styleModal from '../../styles/Modal.module.scss';

const Get = props => {

    const [ recipes, setRecipes ] = useState([]);

    const getDocs = () => {
        dataBase.collection("recipes")
        .where('type', '==', props.type)
        .get()
        .then( querySnapshot => {
            querySnapshot.forEach( doc => {
                setRecipes( recipes => [doc.data(), ...recipes]);
            });
        });
    };

    const [ index, setIndex ] = useState(0);

    return (
        <div>
            <button onClick={getDocs} >obtener datos de {props.type}</button>
            <section className={style.gallery} >
                {recipes.map(doc => {
                    return (
                        <motion.a 
                            href="#open-modal"
                            key={recipes.indexOf(doc)} 
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                borderColor: "rgba(249, 249, 249, 0.8)"
                            }}
                            whileTap={{ scale: 0.999 }}
                            onClick={() => setIndex(recipes.indexOf(doc))}
                        >
                            <article>
                                <img src={doc.image} />
                            </article>
                            <h1>{doc.name}</h1> 
                            <h5>{doc.author}</h5>
                        </motion.a>
                    );
                })}
            </section>
            <section>
                <div id="open-modal" className={styleModal.modalwindow}>
                    <div>
                        <a href="#" title="Close" className={styleModal.modalclose}>X</a>
                        <h1>{recipes.length}</h1>
                    </div>
                </div>    
            </section>
        </div>
    );

};

export default Get;