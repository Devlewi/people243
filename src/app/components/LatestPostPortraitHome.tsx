import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { fr } from "date-fns/locale"; // Pour la langue française
import he from "he";
import { removeTags } from "@/utils/removeTags";
import { formatNumber } from "@/utils/formatedNumber";
import { truncateTitle } from "@/utils/stringUtils";

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

type LatestPostPortraitHomeProps = {
  articlesportrait: Article[];
};

const LatestPostPortraitHome: React.FC<LatestPostPortraitHomeProps> = ({
  articlesportrait,
}) => {


  return (
    <>
      <section
        className="block-wrap block-posts-list block-sc mb-none"
        data-id={9}
        style={{ marginTop: -20 }}
      >
        <div className="block-head block-head-c is-left">
          <h4 className="heading" style={{ fontSize: 25 }}>
            <span className="color">
              <i className="typcn typcn-camera" style={{ fontSize: 30 }} />{" "}
              Mode & Beauté
            </span>
          </h4>
        </div>
        <div className="block-content">
          <div className="loop loop-grid loop-grid-base grid grid-2 md:grid-2 xs:grid-1">
          {articlesportrait.map((article) => (
              <article className="l-post grid-post grid-base-post"
              key={article.id}
              >
              <div className="media">
                <Link
                  href={{
                    pathname: `/${article.slug}`, // URL dynamique
                  }}
                  className="image-link media-ratio ratio-16-9"
                  title="Coco lago fait l’éloge de Coco Argenté"
                >
                  <Image
                    src={article.featured_image ? article.featured_image : "/images/default.png"}
                    alt={article.title}
                    layout="intrinsic"
                    width={377}
                    height={377} // Vous pouvez ajuster la hauteur en fonction du ratio
                    objectFit="cover"
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
                    <Link 
                    href={{
                      pathname: `/${article.slug}`, // URL dynamique
                    }}
                    className="post-title-2">
                    {truncateTitle(he.decode(article.title), 7)}{" "}
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
                <div className="excerpt">
                  <p>
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

export default LatestPostPortraitHome;
