import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { fr } from "date-fns/locale"; // Pour la langue française
import he from "he";
import { formatNumber } from "@/utils/formatedNumber";


type Article = {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  featured_image: string;
  photo_credit?: string; 
  views: number;
  date_published: string; // Précise que c'est une chaîne de caractères
  slug: string;
  author: string;
};

type LatestPostSidebarDeuxHomeProps = {
  articlesidebardeuxhome: Article[];
};

const SidebarDeuxHome: React.FC<LatestPostSidebarDeuxHomeProps> = ({
  articlesidebardeuxhome,
}) => {
  //console.log("COCO - articlespeople");
  //console.log(articlespeople);


  return (
    <>
    <section
                                className="block-wrap block-highlights block-sc"
                                data-id={10}
                                data-is-mixed={1}
                              >
                                <div className="block-head block-head-g is-left term-color-10">
                                  <h4 className="heading">
                                    <Link href="/">
                                      Les plus vus - top 5
                                    </Link>
                                  </h4>
                                </div>
                                <div className="block-content">
                                  <div className="loops-mixed">
                                    
                                  <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
              {articlesidebardeuxhome.map((article) => (
                <article className="l-post small-post small-a-post m-pos-left"
                key={article.id}
                >
                <div className="media">
                  <Link
                    href={{
                      pathname: `/${article.slug}`, // URL dynamique
                    }}
                    className="image-link media-ratio ar-bunyad-thumb"
                    title="Doctors’ Advise on Sanitizers You Should Not Use"
                  >
                    <Image
                      src={article.featured_image ? article.featured_image : "/images/default.png"}
                      alt={article.title}
                      layout="intrinsic"
                      width={110}
                      height={110}
                      objectFit="cover"
                    />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href={{
                        pathname: `/${article.slug}`, // URL dynamique
                      }}
                      className="category term-color-10"
                      rel="category"
                      tabIndex={-1}
                      style={{fontSize:7, fontWeight:900}}
                    >
                      {formatNumber(article.views,'fr-FR')} vues
                    </Link>
                  </span>
                  {/* Crédit photo à l'extrême droite (même alignement) */}
        {article.photo_credit && (
          <span className="cat-labels cat-labels-overlay c-overlay p-bot-right">
            <span className="category" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '5px' }}>
              {article.photo_credit}
            </span>
          </span>
        )}
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a post-meta-left has-below">
                    <h4 className="is-title post-title">
                      <Link href={{
                      pathname: `/${article.slug}`, // URL dynamique
                    }} className="post-title-2">
                      {he.decode(article.title)}
                      </Link>
                    </h4>
                    <div className="post-meta-items meta-below" style={{fontSize:10}}>
                      <span className="meta-item date">
                        <span className="date-link">
                          <time
                            className="post-date"
                            dateTime="2021-01-14T15:55:52+00:00"                            
                            style={{color:'#a7a7a7'}}
                          >
                            Le{" "}
                          {format(
                            new Date(article.date_published),
                            "d MMMM yyyy",
                            { locale: fr }
                          )}{" "}
                          par{" "} <a href="#" style={{color:'black'}} title="" rel="author">
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />{" "}
                          {article.author}
                        </a>
                          </time>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>                            
              ))}
            </div>
                                    
                                  </div>
                                </div>
    </section>
     </>
  )}

  export default SidebarDeuxHome;