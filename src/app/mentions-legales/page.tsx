import { Metadata } from "next";
import DetailsMentionsLegales from "../components/DetailsMentionsLegales";
import NotFound from "../not-found";

export const metadata: Metadata = {
  title: "MENTIONS LEGALES | PEOPLE 243",
  description: "Mentions légales.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// 🔥 fetch direct ici
const getMentions = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom/v1/pages/mentions-legales`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return null;

  return res.json();
};

const DetailsArticle = async () => {
  const data = await getMentions();

  if (!data) return <NotFound />;

  return (
    <>
      <DetailsMentionsLegales content={data.content} title={data.title} />
    </>
  );
};

export default DetailsArticle;