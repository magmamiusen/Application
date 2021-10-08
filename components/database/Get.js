import { useState } from 'react';
import { dataBase } from './config';

const Get = props => {

    const [ recipes, setRecipes ] = useState([]);

    const getDocs = () => {
        dataBase.collection("recipes")
        .where('type', '==', props.type)
        .get()
        .then( querySnapshot => {
            querySnapshot.forEach( doc => {
                setRecipes( recipes => [...recipes, doc.data()]);
            });
        });
    };

    return (
        <div>
            <button onClick={getDocs} >obtener datos de {props.type}</button>
            <div>
                {recipes.map(doc => {
                    return (
                        <div key={recipes.indexOf(doc)} >
                            <h1>{doc.name}</h1>
                            <h3>{doc.type}</h3>  
                            <h5>{doc.author}</h5>
                        </div>
                    );
                })}
            </div>
        </div>
    );

};

export default Get;