/*import Image from "next/image";
import { format } from "date-fns";
import { fr } from "date-fns/locale"; // Pour la langue française
import he from "he";
import { formatNumber } from "@/utils/formatedNumber";
import Link from "next/link";
import { truncateTitle } from "@/utils/stringUtils";
import LatestPostAlaUne from "./LatestPostAlaUne";
*/

import LatestPostAlaUne from "./LatestPostAlaUne";

// Définir l'interface des props, ici on attend une prop 'alauneData' qui est un tableau
interface FeaturedInfoProps {
  alauneData: {
    id: number;
    title: string;
    excerpt: string;
    link: string;
    featured_image: string;
    photo_credit: string;
    views: number;
    date_published: string; // Précise que c'est une chaîne de caractères
    slug: string; // Précise que c'est une chaîne de caractères
    author: string;
  }[];
}

// Fonction pour enlever les balises HTML du texte

const FeaturedInfo: React.FC<FeaturedInfoProps> = ({ alauneData }) => {
  return (
    <>
      <section
                    className="has-el-gap el-gap-default elementor-section elementor-top-section elementor-element elementor-element-aab5c4e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="aab5c4e"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fdf4a3e"
                        data-id="fdf4a3e"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-bf116e3 elementor-widget elementor-widget-smartmag-grid"
                            data-id="bf116e3"
                            data-element_type="widget"
                            data-widget_type="smartmag-grid.default"
                          >
                            <div className="elementor-widget-container">
                              {/* bloc de 4 articles peoples */}
                              {/*<LatestPostPeopleHome/> */}
                              <LatestPostAlaUne articlesalaune={alauneData || []} />                              
                            </div>
                          </div>
                          {/* espace publicitaire */}
                          {/* <Banner728x80Home/> */}
                        </div>
                      </div>
                    </div>
                  </section>
    </>
  );
};

export default FeaturedInfo;
