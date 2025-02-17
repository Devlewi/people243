"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Swal from "sweetalert2"; // Import de SweetAlert

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>("");

  // Fonction pour mettre à jour l'email
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez entrer une adresse email.",
        confirmButtonColor: "#059fe3",
      });
      return;
    }
  
    //    ? `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom/v1/search/?q=${query}&page=${page}`
    //     `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom/v1/search/?q=${searchQuery}&page=${pageNum}`

    // `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom/v1/search/?q=${searchQuery}&page=${pageNum}`

    try {
      const response = await fetch(        
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/newsletter/v1/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
  
      const data = await response.json(); // Récupération de la réponse JSON
  
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Inscription réussie",
          text: "Vous êtes maintenant abonné à la newsletter !",
          confirmButtonColor: "#059fe3",
        });
        setEmail("");
      } else {
        // Vérifie si l'email est déjà inscrit
        // && data.message === "Email déjà inscrit"
        if (response.status === 409) {
          Swal.fire({
            icon: "warning",
            title: "Attention",
            text: "Cet email est déjà inscrit à la newsletter.",
            confirmButtonColor: "#059fe3",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: data.message || "Erreur lors de l'inscription. Veuillez réessayer.",
            confirmButtonColor: "rgb(205, 141, 37)",
          });
        }
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      Swal.fire({
        icon: "error",
        title: "Erreur réseau",
        text: "Veuillez vérifier votre connexion.",
        confirmButtonColor: "#059fe3",
      });
    }
  };
  

  return (
    <form className="form fields-style fields-full" onSubmit={handleSubmit}>
      <div className="main-fields">
        <p className="field-email">
          <input type="email" name="EMAIL" placeholder="Votre adresse email.." required value={email} onChange={handleEmailChange} />
        </p>
        <p className="field-submit">
          <button type="submit" style={{ backgroundColor: "#059fe3" }}>
            s&apos;abonner
          </button>
        </p>
      </div>
      <p className="disclaimer">
        <label>
          <input type="checkbox" name="privacy" required />
          En vous inscrivant, vous acceptez nos conditions générales et notre <a href="#">politique</a> de confidentialité.
        </label>
      </p>
    </form>
  );
};

export default SubscribeForm;