
import { Metadata } from "next";
import SearchContent from "../components/SearchContent";

export const metadata: Metadata = {
  title: "MOTEUR DE RECHERCHE | PEOPLE 237",
  description: "Recherchez et explorez tous les derniers articles disponibles.",
};

export default function Page() {
  return <SearchContent />;
}
