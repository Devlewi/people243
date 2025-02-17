import Image from "next/image";
import { format } from "date-fns";
import { fr } from "date-fns/locale"; // Pour la langue française
import he from "he";
import { formatNumber } from "@/utils/formatedNumber";
import Link from "next/link";
import { truncateTitle } from "@/utils/stringUtils";

// Définir l'interface des props, ici on attend une prop 'alauneData' qui est un tableau
interface FeaturedInfoProps {
  alauneData: {
    id: number;
    title: string;
    excerpt: string;
    link: string;
    featured_image: string;
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
        className="has-el-gap el-gap-default elementor-section elementor-top-section elementor-element elementor-element-7bb5416 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="7bb5416"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3d18b85"
            data-id="3d18b85"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-822f178 elementor-widget elementor-widget-smartmag-featgrid"
                data-id="822f178"
                data-element_type="widget"
                data-widget_type="smartmag-featgrid.default"
              >
                <div className="elementor-widget-container">
                  <section
                    className="block-wrap block-feat-grid block-sc"
                    data-id={7}
                  >
                    <div className="block-content">
                      <section className="feat-grid feat-grid-c static feat-grid-full feat-grid-c-full feat-grid-height">
                        <div className="slides" data-parallax="">
                          <div className="items-wrap slide-wrap">
                            <div className="item item-large item-main item-1 pos-bot">
                              {/* Premier article */}
                              <article className="l-post grid-overlay grid-overlay-a hover-zoom">
                                <div className="media">
                                  <Link
                                     href={{
                                      pathname: `/${alauneData[0].slug}`, // URL dynamique
                                    }}
                                    className="image-link"
                                    title={alauneData[0].title}
                                  >
                                    <Image
                                      src={alauneData[0].featured_image}
                                      alt={alauneData[0].title}
                                      width={1024}
                                      height={705}
                                      className="bg-cover wp-post-image attachment-bunyad-feat-grid-lg-vw size-bunyad-feat-grid-lg-vw no-lazy skip-lazy"
                                    />
                                  </Link>
                                </div>
                                <div className="content-wrap">
                                  <div className="content">
                                    <div className="post-meta post-meta-a meta-contrast has-below">
                                    <div className="post-meta-items meta-above">
  <span className="meta-item cat-labels">
    <a
      href=""
      style={{ backgroundColor: "#059fe3 !important" }}
      className="category term-color-2"
      rel="category"
      tabIndex={-1}
    >
      {formatNumber(alauneData[0].views,'fr-FR')} vues
    </a>
  </span>
</div>
                                      
                                      <h2 className="is-title post-title">
                                        <Link
                                          href={{
                                            pathname: `/${alauneData[0].slug}`, // URL dynamique
                                          }}
                                          style={{ cursor: "pointer" }}
                                        >
                                          {truncateTitle(he.decode(alauneData[0].title), 7)}{" "}
                                        </Link>
                                      </h2>
                                      <div
                                        style={{
                                          color: "white",
                                          fontWeight: 700,
                                        }}
                                      >
                                        Le{" "}
                                        {format(
                                          new Date(
                                            alauneData[0].date_published
                                          ),
                                          "d MMMM yyyy",
                                          { locale: fr }
                                        )}{" "}
                                        par{" "}
                                        <i
                                          className="typcn typcn-user"
                                          style={{
                                            fontSize: 15,
                                            color: "gray",
                                          }}
                                        />{" "}
                                        {alauneData[0].author}
                                        {/*
                                        <span
                                          className="views-count"
                                          style={{
                                            color: "#dc9002",
                                            fontWeight: 700,
                                          }}
                                        >
                                        </span>
                                        */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="item item-medium item-2 pos-bot">
                              {/* Deuxième article */}
                              <article className="l-post grid-overlay grid-overlay-a hover-zoom">
                                <div className="media">
                                  <Link
                                    href={{
                                      pathname: `/${alauneData[1].slug}`, // URL dynamique
                                    }}
                                    className="image-link"
                                    title={alauneData[1].title}
                                  >
                                    <Image
                                      src={alauneData[1].featured_image}
                                      alt={alauneData[1].title}
                                      width={1024}
                                      height={705}
                                      className="bg-cover wp-post-image attachment-bunyad-feat-grid-lg-vw size-bunyad-feat-grid-lg-vw no-lazy skip-lazy"
                                    />
                                  </Link>
                                </div>
                                <div className="content-wrap">
                                  <div className="content">
                                    <div className="post-meta post-meta-a meta-contrast has-below">

                                    <div className="post-meta-items meta-above">
  <span className="meta-item cat-labels">
    <a
      href="#"
      style={{ backgroundColor: "#059fe3 !important" }}
      className="category term-color-2"
      rel="category"
      tabIndex={-1}
    >
       {formatNumber(alauneData[1].views,'fr-FR')} vues
    </a>
  </span>
</div>

                                      <h2 className="is-title post-title">
                                        <Link
                                          href={{
                                            pathname: `/${alauneData[1].slug}`, // URL dynamique
                                          }}
                                          style={{ cursor: "pointer" }}
                                        >
                                          {truncateTitle(he.decode(alauneData[1].title), 7)}{" "}
                                        </Link>
                                      </h2>
                                      <div
                                        style={{
                                          color: "white",
                                          fontWeight: 700,
                                        }}
                                      >
                                        Le{" "}
                                        {format(
                                          new Date(
                                            alauneData[1].date_published
                                          ),
                                          "d MMMM yyyy",
                                          { locale: fr }
                                        )}{" "}
                                        par{" "}
                                        <i
                                          className="typcn typcn-user"
                                          style={{
                                            fontSize: 15,
                                            color: "gray",
                                          }}
                                        />{" "}
                                        {alauneData[1].author}
                                        <span
                                          className="views-count"
                                          style={{
                                            color: "#dc9002",
                                            fontWeight: 700,
                                          }}
                                        >
                                          {/* vues : {alauneData[1].views}{" "} */}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="item item-medium item-3 pos-bot">
                              {/* Troisième article */}
                              <article className="l-post grid-overlay grid-overlay-a hover-zoom">
                                <div className="media">
                                  <Link
                                    href={{
                                      pathname: `/${alauneData[2].slug}`, // URL dynamique
                                    }}
                                    className="image-link"
                                    title={alauneData[2].title}
                                  >
                                    <Image
                                      src={alauneData[2].featured_image}
                                      alt={alauneData[2].title}
                                      width={1024}
                                      height={705}
                                      className="bg-cover wp-post-image attachment-bunyad-feat-grid-lg-vw size-bunyad-feat-grid-lg-vw no-lazy skip-lazy"
                                    />
                                  </Link>
                                </div>
                                <div className="content-wrap">
                                  <div className="content">
                                    <div className="post-meta post-meta-a meta-contrast has-below">
                                    <div className="post-meta-items meta-above">
  <span className="meta-item cat-labels">
    <a
      href=""
      style={{ backgroundColor: "#059fe3 !important" }}
      className="category term-color-2"
      rel="category"
      tabIndex={-1}
    >
       {formatNumber(alauneData[2].views,'fr-FR')} vues
    </a>
  </span>
</div>

                                      <h2 className="is-title post-title">
                                        <Link
                                          href={{
                                            pathname: `/${alauneData[2].slug}`, // URL dynamique
                                          }}
                                          style={{ cursor: "pointer" }}
                                        >
                                          {truncateTitle(he.decode(alauneData[2].title), 7)}{" "}
                                        </Link>
                                      </h2>
                                      <div
                                        style={{
                                          color: "white",
                                          fontWeight: 700,
                                        }}
                                      >
                                        Le{" "}
                                        {format(
                                          new Date(
                                            alauneData[2].date_published
                                          ),
                                          "d MMMM yyyy",
                                          { locale: fr }
                                        )}{" "}
                                        par{" "}
                                        <i
                                          className="typcn typcn-user"
                                          style={{
                                            fontSize: 15,
                                            color: "gray",
                                          }}
                                        />{" "}
                                        {alauneData[2].author} 
                                        
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedInfo;
