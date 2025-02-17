//"use client";
import { Metadata } from "next";
import DetailsMentionsLegales from "../components/DetailsMentionsLegales";


export const metadata: Metadata = {
  title: "MENTIONS LEGALES | PEOPLE 243",
  description: "Mentions légales.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },


};


const DetailsArticle: React.FC = () => {
          
  return (
    <>

<DetailsMentionsLegales/>

    </>
  );
};

export default DetailsArticle;
