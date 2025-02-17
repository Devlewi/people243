// components/TransitionPage.tsx
import React from "react";
import "./styles/TransitionPage.css"; // Styles pour la transition

const TransitionPage: React.FC = () => {
  return (
    <div className="transition-overlay">
      <div className="lds-spinner">
        {[...Array(12)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
      {/* <p>Chargement...</p> */}
    </div>
  );
};

export default TransitionPage;
