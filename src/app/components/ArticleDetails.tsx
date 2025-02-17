import Image from "next/image";
import Link from "next/link";
import SidebarUnDetailsArticle from "./SidebarUnDetailsArticle";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const ArticleDetails = () => {
  return (
    <>
      {/**section Culture 2 latest posts */}

      <div
        data-elementor-type="wp-page"
        data-elementor-id={6}
        className="elementor elementor-6"
      >
        <br />

        <section
          className="has-el-gap el-gap-default elementor-section elementor-top-section elementor-element elementor-element-586c5c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="586c5c1"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-9921d67 main-content"
              data-id="9921d67"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-4fcfe03 elementor-widget elementor-widget-smartmag-postslist"
                  data-id="4fcfe03"
                  data-element_type="widget"
                  data-widget_type="smartmag-postslist.default"
                >
                  <nav
                    className="breadcrumbs is-full-width breadcrumbs-a"
                    id="breadcrumb"
                  >
                    <div className="inner ts-contain " style={{fontWeight:800}}>
                      <span>
                        <a href="">
                        <i className="typcn typcn-home" style={{fontSize:17, color:'#3e3b3b'}}></i>
                          <span>Accueil</span>
                        </a>
                      </span>
                      &nbsp;
                      <span className="delim">»</span>
                      &nbsp;
                      <span>
                        <a href="category/example-3/index.html">
                          <span>Cinema</span>
                        </a>
                      </span>
                      &nbsp;
                      <span className="delim">»</span>
                      &nbsp;
                      <span className="current" style={{fontFamily:'Roboto Slab,sans-serif!important'}}>
                        Classe à part: le film de Nguemgaing Rosine sera projeté
                        ce soir à Douala
                      </span>
                    </div>
                  </nav>

                  <br />

                  <div className="elementor-widget-container">
                    <div className="post-meta-items meta-above">
                      <span className="meta-item cat-labels">
                        <Link
                          href="/categorie/culture"
                          className="category term-color-15"
                          rel="category"
                        >
                          Cinema
                        </Link>
                      </span>
                    </div>
                    <br />

                    <h1
                      className="is-title post-title"
                      style={{
                        fontFamily: "Roboto Slab,sans-serif!important",
                        fontSize: 32,
                      }}
                    >
                      Classe à part: le film de Nguemgaing Rosine sera projeté
                      ce soir à Douala
                    </h1>

                    <div className="post-meta-items meta-below has-author-img">
                      <span className="meta-item post-author has-img">
                        <i
                          className="typcn typcn-user"
                          style={{ fontSize: 22 }}
                        />
                        <span className="by">Par</span>{" "}
                        <a
                          href="author/admin/index.html"
                          title="Posts by Shane Doe"
                          rel="author"
                        >
                          Marie Claude
                        </a>
                      </span>
                      &nbsp;&nbsp;
                      <span className="meta-item date">
                        <time
                          className="post-date"
                          dateTime="2021-01-13T16:12:14+00:00"
                        >
                          26 décembre 2024
                        </time>
                      </span>
                      {/*<span style="font-weight: bolder;">
											<i class="typcn typcn-eye" style="font-size: 22px;"></i> 290 vues
										</span>*/}
                    </div>


                    <div
                      className="post-share post-share-b spc-social-colors post-share-b1"
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: 15,
                        marginBottom: 30,
                      }}
                    >
                      <a
                        href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fsmartmag.theme-sphere.com%2Fgood-news%2Fanswers-to-your-questions-about-the-galaxy-s21-series%2F"
                        className="service s-facebook"
                        title="Share on Facebook"
                        target="_blank"
                        rel="nofollow noopener"
                        style={{
                          padding: "10px 15px",
                          backgroundColor: "#1877F2",
                          color: "white",
                          borderRadius: "5px",
                          textDecoration: "none",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                       <FaFacebookF /> Facebook
                      </a>
                      <a
                        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fsmartmag.theme-sphere.com%2Fgood-news%2Fanswers-to-your-questions-about-the-galaxy-s21-series%2F&text=Answers%20to%20Your%20Questions%20About%20the%20Galaxy%20S21%20Series"
                        className="service s-twitter"
                        title="Share on Twitter"
                        target="_blank"
                        rel="nofollow noopener"
                        style={{
                          padding: "10px 15px",
                          backgroundColor: "#1DA1F2",
                          color: "white",
                          borderRadius: "5px",
                          textDecoration: "none",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                         <FaXTwitter /> Twitter
                      </a>
                      <a
                        href="https://wa.me/?text=Answers%20to%20Your%20Questions%20About%20the%20Galaxy%20S21%20Series%20https%3A%2F%2Fsmartmag.theme-sphere.com%2Fgood-news%2Fanswers-to-your-questions-about-the-galaxy-s21-series%2F"
                        className="service s-whatsap"
                        title="Share on WhatsApp"
                        target="_blank"
                        rel="nofollow noopener"
                        style={{
                          padding: "10px 15px",
                          backgroundColor: "#25D366",
                          color: "white",
                          borderRadius: "5px",
                          textDecoration: "none",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        <IoLogoWhatsapp /> WhatsApp
                      </a>
                    </div>

                    <div className="single-featured">
                      <Image
                        src="https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-film-people237.jpg"
                        alt="Image de coco lago"
                        layout="intrinsic"
                        width={788}
                        height={515}
                      />
                    </div>

                    <br />

                    <div className="post-content-wrap has-share-float">
                      <div
                        className="post-content cf entry-content content-spacious"
                        style={{ fontSize: 15 }}
                      >
                        <p>
                          L’actrice présente son nouveau film ce soir à Douala.
                          Un événement très attendu par les fans de cinéma, et
                          où, plusieurs acteurs seront présents.
                        </p>
                        <p>
                          La crème des stars de Douala sera présente ce 26
                          décembre au cinéma Eden de Douala dès 19 heures, pour
                          l’avant-première de Class à part. « Coucou mes
                          Authentik, l’attente a été longue , j’ai le plaisir de
                          vous annoncer la sortie officielle de notre film
                          Classe À Part qui sera en avant première ce 26
                          Décembre 2024 au Cinéma Eden de Douala » a-t-elle
                          écrit via ses réseaux sociaux pour inviter le maximum
                          de fan à cet événement.
                        </p>
                        <p>
                          En tête d’affiche on retrouve Rosine aux côtés de
                          Dilane Essomba, Julia Samantha Edima, Mousavou Rosine,
                          ou encore Marcelle Moutcheu. Le public a longtemps
                          attendus ce contenu qui nous replonge dans les
                          méandres de le jeunesse, des collégiens. Ticket
                          disponible à – 3000frs simple – 5000frs Classic –
                          10000frs VIP et 20000frs VVIP.
                        </p>
                        <center>
                          <Image
                            src="https://client.cynomedia-africa.com/www/images/4cdb4e14b423eb93c8274478e553715f.jpg"
                            width={336}
                            height={280}
                            alt="image"
                          />
                        </center>
                        <p style={{ fontWeight: "bolder" }}>
                          {" "}
                          Suivez l&apos;information en direct sur notre chaîne{" "}
                          <b style={{ color: "#dba240" }}>Whatsapp</b>
                        </p>
                        <p style={{ fontSize: 16 }}>
                          <b>Tags</b> : class à part, film, rosine nguemgaing
                        </p>
                      </div>
                    </div>

                    <br />

                    <section className="related-posts">
                      <div className="block-head block-head-ac block-head-a block-head-a1 is-left">
                        <h4 className="heading">
                          {" "}
                          <i
                            className="typcn typcn-folder"
                            style={{ fontSize: 22 }}
                          />{" "}
                          Articles similaires
                        </h4>
                      </div>
                      <section
                        className="block-wrap block-grid mb-none"
                        data-id={7}
                      >
                        <div className="block-content">
                          <div className="loop loop-grid loop-grid-sm grid grid-2 md:grid-2 xs:grid-1">
                            <article className="l-post grid-post grid-base-post">
                              <div className="media">
                                <Link
                                  href="/articles/details/"
                                  className="image-link media-ratio ratio-16-9"
                                  title="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                                >
                                  <span
                                    data-bgsrc="https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-people237.jpg"
                                    className="img bg-cover wp-post-image attachment-bunyad-medium size-bunyad-medium lazyloaded"
                                    data-bgset="https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-people237.jpg"
                                    data-sizes="(max-width: 377px) 100vw, 377px"
                                    style={{
                                      backgroundImage:
                                        'url("https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-people237.jpg")',
                                    }}
                                  />
                                </Link>
                                <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                                  <Link
                                    href="/categorie/culture/"
                                    className="category term-color-3"
                                    rel="category"
                                    tabIndex={-1}
                                  >
                                    People
                                  </Link>
                                </span>
                              </div>
                              <div className="content">
                                <div className="post-meta post-meta-a has-below">
                                  <h2 className="is-title post-title">
                                    <a href="ryan-reynolds-blake-lively-arrive-at-film-festival/index.html">
                                      Nguemgaing Rosine: succès total pour son
                                      film{" "}
                                    </a>
                                  </h2>
                                  <div className="post-meta-items meta-below">
                                    <span className="meta-item post-author">
                                      <span className="by">Par</span>{" "}
                                      <a
                                        href="author/admin/index.html"
                                        title="Posts by Shane Doe"
                                        rel="author"
                                      >
                                        Florine{" "}
                                        <i
                                          className="typcn typcn-user"
                                          style={{
                                            fontSize: 15,
                                            color: "gray",
                                          }}
                                        />{" "}
                                      </a>
                                    </span>
                                    <span className="meta-item has-next-icon date">
                                      <span className="date-link">
                                        <time
                                          className="post-date"
                                          dateTime="2021-01-14T17:47:35+00:00"
                                        >
                                          {" "}
                                          <i className="typcn typcn-time" />
                                          lundi, 30 décembre 2024
                                        </time>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="excerpt">
                                  <p>
                                    L&apos;avant première de classe à part à eu lieu
                                    ce 26 décembre 2024. Tout le monde est
                                    conquis par cette production à caractère
                                    éducatif. Le…
                                  </p>
                                </div>
                              </div>
                            </article>
                            <article className="l-post grid-post grid-base-post">
                              <div className="media">
                                <Link
                                  href="/articles/details/"
                                  className="image-link media-ratio ratio-16-9"
                                  title="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                                >
                                  <span
                                    data-bgsrc="https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-people237.jpg"
                                    className="img bg-cover wp-post-image attachment-bunyad-medium size-bunyad-medium lazyloaded"
                                    data-bgset="https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-people237.jpg"
                                    data-sizes="(max-width: 377px) 100vw, 377px"
                                    style={{
                                      backgroundImage:
                                        'url("https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-people237.jpg")',
                                    }}
                                  />
                                </Link>
                                <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                                  <Link
                                    href="/categorie/culture/"
                                    className="category term-color-3"
                                    rel="category"
                                    tabIndex={-1}
                                  >
                                    People
                                  </Link>
                                </span>
                              </div>
                              <div className="content">
                                <div className="post-meta post-meta-a has-below">
                                  <h2 className="is-title post-title">
                                    <a href="ryan-reynolds-blake-lively-arrive-at-film-festival/index.html">
                                      Nguemgaing Rosine: succès total pour son
                                      film{" "}
                                    </a>
                                  </h2>
                                  <div className="post-meta-items meta-below">
                                    <span className="meta-item post-author">
                                      <span className="by">Par</span>{" "}
                                      <a
                                        href="author/admin/index.html"
                                        title="Posts by Shane Doe"
                                        rel="author"
                                      >
                                        Florine{" "}
                                        <i
                                          className="typcn typcn-user"
                                          style={{
                                            fontSize: 15,
                                            color: "gray",
                                          }}
                                        />{" "}
                                      </a>
                                    </span>
                                    <span className="meta-item has-next-icon date">
                                      <span className="date-link">
                                        <time
                                          className="post-date"
                                          dateTime="2021-01-14T17:47:35+00:00"
                                        >
                                          {" "}
                                          <i className="typcn typcn-time" />
                                          lundi, 30 décembre 2024
                                        </time>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="excerpt">
                                  <p>
                                    L&apos;avant première de classe à part à eu lieu
                                    ce 26 décembre 2024. Tout le monde est
                                    conquis par cette production à caractère
                                    éducatif. Le…
                                  </p>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </section>
                    </section>
                  </div>
                </div>
              </div>
            </div>

{/* ts-sticky-col attribut pour mettre la colonne en sticky */}
            <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ca6b821 main-sidebar main-sidebar"
              data-id="ca6b821"
              data-element_type="column"              
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-a297ad7 elementor-widget elementor-widget-smartmag-highlights"
                  data-id="a297ad7"
                  data-element_type="widget"
                  data-widget_type="smartmag-highlights.default"
                >
                  <div className="elementor-widget-container">
                    <SidebarUnDetailsArticle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArticleDetails;
