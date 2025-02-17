//"use client";
import CategoryContent from "@/app/components/CategoryContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CATEGORIE | PEOPLE 237",
  description: "Page categorie de PEOPLE 237, découvrez nos dernières actualités.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  /*
  openGraph: {
    title: "CATEGORIE | PEOPLE 237",
    description: "Page categorie de PEOPLE 237",
    url: "https://people237.vercel.app/",
    siteName: "PEOPLE 237",
    images: [{ url: "/images/logo-og.png", width: 120, height: 120 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CATEGORIE | PEOPLE 237",
    description: "Page categorie de PEOPLE 237",
    images: ["/images/favicon.png"],
  },
  */
};

const CulturePage: React.FC = () => {
          
  return (
    <>

<CategoryContent/>

    </>
  );
};

export default CulturePage;
