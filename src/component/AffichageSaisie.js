import React from "react";
import './Coque.css';

const AffichageSaisie = ({ value }) => {
    return (
      <div className="affichage-saisie" mode="single" max={70} >
        {value}
        
  
      </div>
    );
  };
  
  export default AffichageSaisie;