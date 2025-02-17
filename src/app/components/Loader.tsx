import React from 'react';
import './styles/Loader.css'; // Importation du fichier CSS

const Loader: React.FC = () => {
  return (
    <div className="lds-spinner">
      {[...Array(12)].map((_, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
};

export default Loader;
