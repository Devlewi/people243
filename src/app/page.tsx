import { Metadata } from "next";
import Head from "next/head";
import FeaturedInfo from "./components/FeaturedInfo";
import HomePageContentComponent from "./components/HomePageContentComponent";


export const metadata: Metadata = {
  title: "ACCUEIL | PEOPLE 243",
  description: "Page d'accueil PEOPLE 243, découvrez nos dernières actualités.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  /*
  openGraph: {
    title: "ACCUEIL | PEOPLE 237",
    description: "Page d'accueil de PEOPLE 237",
    url: "https://people237.vercel.app/",
    siteName: "PEOPLE 237",
    images: [{ url: "/favicon.ico", width: 120, height: 120 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACCUEIL | PEOPLE 237",
    description: "Page d'accueil de PEOPLE 237",
    images: ["/favicon.ico"],
  },*/

};


// Fonction qui récupère les données côté serveur
const fetchData = async () => {
  try {
    //"https://controlpanel.people237.com/wp-json/articles/homepage"

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/articles/homepage`, 
    {
      next: { revalidate: 60 },
    }); // Remplacez par votre URL d'API
    const data = await response.json();
    //console.log("DATA RECUPEREE :");
    //console.log(data.alaune);
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données API", error);
    return { alaune: [], recap: {} };
  }
};

export default async function Home() {

  const data = await fetchData();

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>PEOPLE 237</title>

      </Head>
          {/* Passer les données à FeaturedInfo */}          

          {data.alaune && data.alaune.length > 2 && (
            <FeaturedInfo alauneData={data.alaune} />
          )}

        {/* Passer les données à HomePageContentComponent */}
        <HomePageContentComponent recapData={data.recap || {}}/>
        
        
    </div>
  )
}