import React from "react";
import './Coque.css';

const BtnComponent = ({ className, value, onClick }) => {
    return (
      <div className="btnn">
      <button className={className} onClick={onClick}>
        {value}
      </button>
      </div>
    );
  };
  
  export default BtnComponent;