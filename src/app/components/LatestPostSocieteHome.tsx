import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { fr } from "date-fns/locale"; // Pour la langue française
import he from "he";
import { formatNumber } from "@/utils/formatedNumber";
import { truncateTitle } from "@/utils/stringUtils";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  featured_image: string;
  views: number;
  date_published: string; // Précise que c'est une chaîne de caractères
  slug: string;
  author: string;
};

type LatestPostSocieteHomeProps = {
  articlesociete: Article[];
};

const LatestPostSocieteHome: React.FC<LatestPostSocieteHomeProps> = ({
  articlesociete,
}) => {
  
  return (
    <>
<section
                                className="block-wrap block-overlay block-sc cols-gap-sm mb-none"
                                data-id={22}
                              >
                                <div className="block-content">
                                  <div className="loop loop-overlay grid grid-2 md:grid-2 xs:grid-1">
                                  {articlesociete.map((article) => (
                                    <article className="l-post grid-overlay overlay-post grid-overlay-a overlay-base-post"
                                    key={article.id}>
                                    <div className="media">
                                      <Link
                                        href={{
                                          pathname: `/${article.slug}`, // URL dynamique
                                        }}
                                        className="image-link media-ratio ratio-4-3"
                                        title="Review: Mobile Carriers Eying on 5G Rollout in Generation Z Models"
                                      >
                                        <Image
                                          src={article.featured_image ? article.featured_image : "/images/default.png"}
                                          alt={article.title}
                                          layout="intrinsic"
                                          width={608}
                                          height={608} // Ajustez la hauteur en fonction du ratio si nécessaire
                                          objectFit="cover"
                                        />
                                      </Link>
                                    </div>
                                    <div className="content-wrap">
                                      <div className="content">
                                        <div className="post-meta post-meta-a meta-contrast has-below">
                                          <div className="post-meta-items meta-above">
                                            <span className="meta-item cat-labels">
                                              <Link
                                                href="/categorie/culture/"
                                                className="category term-color-15"
                                                rel="category"
                                                tabIndex={-1}
                                              >
                                                {formatNumber(article.views,'fr-FR')} vues
                                              </Link>
                                            </span>
                                          </div>
                                          <h2 className="is-title post-title">
                                            <Link href={{
                      pathname: `/${article.slug}`, // URL dynamique
                    }}>
                                            {truncateTitle(he.decode(article.title), 7)}{" "}
                                            </Link>
                                          </h2>
                                          <div className="post-meta-items meta-below">
                                            <span className="meta-item post-author">
                                              <a
                                                href="#"
                                                title="Posts by Shane Doe"
                                                rel="author"
                                              >
                                                Le{" "}
                          {format(
                            new Date(article.date_published),
                            "d MMMM yyyy",
                            { locale: fr }
                          )}{" "}
                                                <i
                                                  className="typcn typcn-user"
                                                  style={{
                                                    fontSize: 15,
                                                    color: "gray",
                                                  }}
                                                />
                                                {article.author}
                                              </a>
                                            </span>                                            
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                    ))}
                                  </div>
                                </div>
                              </section>
    </>
  )}

  export default LatestPostSocieteHome;
