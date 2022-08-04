import {useState} from "react";
import React from "react";


function FunctionComponent() {
   const [nom,setNom ] = useState("Marie-Sophie");
   const [prenom,setPrenom ] = useState("Jean-Lambert");
   const [age,setAge ] = useState("432");
   
    const changerNom = () => {
            setNom("Jean");
        }

    const changerPrenom = () => {
        setPrenom("XLambert");
    }

    const changerAge = () => {
        setAge("42");
    }

    return (
        <div>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo" />
            <button onClick={()=>setNom(changerNom)}>Changer le nom</button>
            <button onClick={()=>setPrenom(changerPrenom)}>Changer le prenom</button>
            <button onClick={()=> setAge (changerAge)}>Changer l'age</button>
             <p>J'ai {age } ans</p>
             <p> Mon prénom est {prenom}</p>
             <p>Mon âge est {age}</p>
             <p>Mon nom de famille est {nom}</p>
      </div>    
      );
    }

export default FunctionComponent;