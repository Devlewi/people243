/* eslint-disable @next/next/no-img-element */
//import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { fr } from "date-fns/locale"; // Pour la langue française
import { removeTags } from "@/utils/removeTags";
import { formatNumber } from "@/utils/formatedNumber";
import { truncateTitle } from "@/utils/stringUtils";
import he from "he";
import Image from "next/image";
//import { transformImageUrl } from "../utils/imageUtils";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  featured_image: string;
  photo_credit: string;
  views: number;
  date_published: string; // Précise que c'est une chaîne de caractères
  slug: string;
  author: string;
};

type LatestPostAlaUneProps = {
  articlesalaune: Article[];
};

const LatestPostAlaUne: React.FC<LatestPostAlaUneProps> = ({
  articlesalaune,
}) => {
  //console.log("COCO - articlesalaune");
  //console.log(articlesalaune);


  return (
    <>
      <section
        className="block-wrap block-grid block-sc"
        data-id={8}
        style={{ marginTop: 20 }}
      >
        <div className="block-head block-head-c is-left">
          <h4 className="heading" style={{ fontSize: 25 }}>
            <span className="color">
              <i className="typcn typcn-news" style={{ fontSize: 30 }} /> A la une
            </span>{" "}
          </h4>
        </div>
        <div className="block-content">
          {/*style={{border:"2px solid rgb(237 237 237)",borderRadius:"20px",padding:10}}*/}
          <div className="loop loop-grid loop-grid-base grid grid-4 md:grid-4 xs:grid-1">
            {articlesalaune.map((article) => (
              <article
                key={article.id}
                className="l-post grid-post grid-base-post"                                
              >
                <div className="media">
                  <Link
                     href={{
                      pathname: `/${article.slug}`, // URL dynamique
                    }}
                    className="image-link media-ratio ratio-16-9"
                    title="L’acteur Hervé Nguetch n’est plus un coeur à prendre"
                  >

<Image
  src={article.featured_image ? article.featured_image : "/images/default.png"}
  alt={article.title}
  width={500}
  height={300}
  objectFit="cover"
  quality={75}
/>

                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href="#"
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      {formatNumber(article.views,'fr-FR')} vues 
                    </Link>
                  </span>

                  {/* Crédit photo à l'extrême droite (même alignement) */}
        {article.photo_credit && (
          <span className="cat-labels cat-labels-overlay c-overlay p-bot-right">
            <span className="category" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '10px' }}>
              {article.photo_credit}
            </span>
          </span>
        )}
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                      <Link href={{
                      pathname: `/${article.slug}`, // URL dynamique
                    }} 
                    className="post-title-2">

                        {truncateTitle(he.decode(article.title), 7)}{" "}
                        {/* Limite à 10 mots */}
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                      <span className="meta-item post-author">
                        <span className="by">
                          Le{" "}
                          {format(
                            new Date(article.date_published),
                            "d MMMM yyyy",
                            { locale: fr }
                          )}{" "}
                          par{" "}
                        </span>{" "}
                        <a href="#" title="Posts by Shane Doe" rel="author">
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />{" "}
                          {article.author}

                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="excerpt post-exercpt">
                    <p>
                      {/* <div dangerouslySetInnerHTML={{ __html: article.excerpt}} className="red"/> */}

                      {removeTags(he.decode(article.excerpt))}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestPostAlaUne;
