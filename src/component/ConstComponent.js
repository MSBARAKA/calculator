import {useState} from "react";
import React from "react";

const ConstComponent = () => {
   const [nom,setNom ] = useState("Marie");
   


   const changerNom = () => {
        setNom("Jean");
    }

    return (
            <div>
                <h1>Hello</h1>
                <h1>My name is {nom}</h1>
                <button onClick={changerNom}>Changer le nom</button>
            </div>
        );

}


export default ConstComponent;