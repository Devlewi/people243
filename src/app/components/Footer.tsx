import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@mui/icons-material";
import { BiChevronDown } from "react-icons/bi";

export default function Footer() {
  const [isPeopleOpen, setIsPeopleOpen] = useState(false);
  const [isDecouverteOpen, setIsDecouverteOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isModeBeautyOpen, setIsModeBeautyOpen] = useState(false);
  const [isCinemaArtsOpen, setIsCinemaArtsOpen] = useState(false);
  const [isSportOpen, setIsSportOpen] = useState(false);
  const [isPhotosOpen, setIsPhotosOpen] = useState(false);
  const [isVideosOpen, setIsVideosOpen] = useState(false);






  // Fonction pour basculer l'état de la section People
  const togglePeopleSection = () => {
    setIsPeopleOpen(!isPeopleOpen);
  };

  const toggleDecouverteSection = () => {
    setIsDecouverteOpen(!isDecouverteOpen);
  };

  const toggleEventsSection = () => {
    setIsEventsOpen(!isEventsOpen);
  };

  const toggleModeBeautySection = () => {
    setIsModeBeautyOpen(!isModeBeautyOpen);
  };

  // Fonction pour basculer l'état de la section
  const toggleCinemaArtsSection = () => {
    setIsCinemaArtsOpen(!isCinemaArtsOpen);
  };

    // Fonction pour basculer l'état de la section
  const toggleSportSection = () => {
        setIsSportOpen(!isSportOpen);
      };

  const togglePhotosSection = () => {
        setIsPhotosOpen(!isPhotosOpen);
      };

  const toggleVideosSection = () => {
        setIsVideosOpen(!isVideosOpen);
      };
    

  return (
    <footer className="main-footer cols-gap-lg footer-bold s-dark">
      <div className="upper-footer bold-footer-upper">
        <div className="ts-contain wrap">
          <div className="widgets row cf">
            {/* Section A Propos de Nous */}
            <div className="widget col-md-4 widget-about">
              <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                <h5 className="heading" style={{ color: "#0a99da" }}>
                  A Propos de Nous
                </h5>
              </div>
              <div className="inner ">
                <div className="image-logo">
                  <Link href={"/"}>
                    <Image
                      src="/images/logo-people243.png"
                      width={180}
                      height={80}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="base-text about-text">
                  <p>
                    Découvrez en live l&apos;actualité people en photos et vidéos.
                    Toutes les news et actualités de stars, les meilleurs et les
                    pires looks de vos stars.
                  </p>
                </div>
              </div>
            </div>

            {/* Section People avec Accordéon */}
            <div className="widget col-md-4 ts-block-widget smartmag-widget-posts-small">
              <div className="block">
                
                <section
                  className="block-wrap block-posts-small block-sc mb-none"
                  data-id={28}
                >
                  {/* Titre de la section People avec chevron */}
                  <div
                    className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style flex items-center cursor-pointer"
                    onClick={togglePeopleSection}
                  >
                    <h5
                      className="heading"
                      style={{
                        color: "#0a99da",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      {isPeopleOpen ? <BiChevronDown /> : <ChevronRight />}{" "}
                      People
                    </h5>
                  </div>

                  {/* Accordéon des sous-catégories */}
                  {isPeopleOpen && (
                    <div className="block-content" style={{ marginLeft: 20 }}>
                      <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/people-portrait"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Portrait
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/people-top-stars"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Top Stars
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/people-international"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  International
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/people-buzz"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Buzz
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/people-nouveaux-talents"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Nouveaux talents
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/people-couples-celebres"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Couples célèbres
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/people-engagements-des-stars"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Engagements des stars
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/people-scandales"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Scandales
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/actualites-people"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Actualités people
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <br />
                        {/* Autres articles sous People */}
                      </div>
                    </div>
                  )}
                </section>
                
                <section
                  className="block-wrap block-posts-small block-sc mb-none"
                  data-id={28}
                >
                  {/* Titre de la section Decouverte avec chevron */}
                  <div
                    className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style flex items-center cursor-pointer"
                    onClick={toggleDecouverteSection} // Changez la fonction si vous voulez une logique spécifique pour cette section
                  >
                    <h5
                      className="heading"
                      style={{
                        color: "#0a99da",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      {isDecouverteOpen ? <BiChevronDown /> : <ChevronRight />}{" "}
                      Découverte
                    </h5>
                  </div>

                  {/* Accordéon des sous-catégories */}
                  {/* Accordéon des sous-catégories de Découverte */}
                  {isDecouverteOpen && (
                    <div className="block-content" style={{ marginLeft: 20 }}>
                      <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
                        {/* Sous-catégorie Restaurants tendances */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/decouverte-restaurants-tendances"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Restaurants tendances
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Sorties */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/sorties-decouverte"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Sorties
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Voyages */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/decouvertes-voyages"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Voyages
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Bonne Adresses */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/decouverte-bonnes-adresses"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Bonne Adresses
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Idées cadeaux */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/decouvertes-idees-cadeaux"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Idées cadeaux
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Bon plan */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/decouvertes-bons-plans"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Bon plan
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <br />
                      </div>
                    </div>
                  )}
                </section>

                <section
                  className="block-wrap block-posts-small block-sc mb-none"
                  data-id={28}
                >
                  {/* Titre de la section Decouverte avec chevron */}
                  <div
                    className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style flex items-center cursor-pointer"
                    onClick={toggleEventsSection} // Changez la fonction si vous voulez une logique spécifique pour cette section
                  >
                    <h5
                      className="heading"
                      style={{
                        color: "#0a99da",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      {isEventsOpen ? <BiChevronDown /> : <ChevronRight />}{" "}
                      Events
                    </h5>
                  </div>

                  {/* Accordéon des sous-catégories */}
                  {/* Accordéon des sous-catégories de Découverte */}
                  {isEventsOpen && (
                    <div className="block-content" style={{ marginLeft: 20 }}>
                      <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
                        {/* Sous-catégorie Restaurants tendances */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/events-concerts"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Concerts
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Festivals */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/events-festivals"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Festivals
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Galas */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/events-galas"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Galas
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Cérémonies */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/events-ceremonies"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Cérémonies
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Soirées VIP */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/events-soirees-vip"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Soirées VIP
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>

                        {/* Sous-catégorie Lancements de produits */}
                        <article className="l-post small-post small-a-post m-pos-left">
                          <div className="content">
                            <div className="post-meta post-meta-a post-meta-left has-below">
                              <h4 className="is-title post-title">
                                <Link
                                  href={"/categorie/events-lancements-de-produits"}
                                  className="white-title"
                                >
                                  <i className="typcn typcn-chevron-right" />{" "}
                                  Lancements de produits
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </article>
                        <br />
                      </div>
                    </div>
                  )}
                </section>
                

                <section className="block-wrap block-posts-small block-sc mb-none" data-id={28}>
      {/* Titre de la section Mode & Beauté avec chevron */}
      <div
        className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style flex items-center cursor-pointer"
        onClick={toggleModeBeautySection} // Changez la fonction ici pour que le clic bascule l'état
      >
        <h5
          className="heading"
          style={{
            color: "#0a99da",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {isModeBeautyOpen ? <BiChevronDown /> : <ChevronRight />} Mode & Beauté
        </h5>
      </div>

      {/* Accordéon des sous-catégories */}
      {isModeBeautyOpen && (
        <div className="block-content" style={{ marginLeft: 20 }}>
          <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
            {/* Sous-catégorie Tendances mode */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/tendances-mode"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Tendances mode
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Looks de stars */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/Mode-beaute-looks-de-stars"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Looks de stars
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Conseils beauté */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/mode-beaute-conseils-beaute"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Conseils beauté
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Collaborations mode */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/collaborations-mode"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Collaborations mode
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            <br />
          </div>
        </div>
      )}
                </section>


                <section className="block-wrap block-posts-small block-sc mb-none" data-id={28}>
      {/* Titre de la section Cinéma & Arts avec chevron */}
      <div
        className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style flex items-center cursor-pointer"
        onClick={toggleCinemaArtsSection} // Changez la fonction ici pour que le clic bascule l'état
      >
        <h5
          className="heading"
          style={{
            color: "#0a99da",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {isCinemaArtsOpen ? <BiChevronDown /> : <ChevronRight />} Cinéma & Arts
        </h5>
      </div>

      {/* Accordéon des sous-catégories */}
      {isCinemaArtsOpen && (
        <div className="block-content" style={{ marginLeft: 20 }}>
          <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
            {/* Sous-catégorie Sorties de films */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/cinema-arts-sorties-de-films"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Sorties de films
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Séries TV */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/cinema-arts-series-tv"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Séries TV
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Interviews d'acteurs */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/cinema-arts-interviews-dacteurs"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Interviews d&apos;acteurs
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Behind-the-scènes */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/cinema-arts-behind-the-scenes"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Behind-the-scènes
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            <br />
          </div>
        </div>
      )}
    </section>


    <section className="block-wrap block-posts-small block-sc mb-none" data-id={28}>
      {/* Titre de la section Sport avec chevron */}
      <div
        className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style flex items-center cursor-pointer"
        onClick={toggleSportSection} // Changez la fonction ici pour que le clic bascule l'état
      >
        <h5
          className="heading"
          style={{
            color: "#0a99da",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {isSportOpen ? <BiChevronDown /> : <ChevronRight />} Sport
        </h5>
      </div>

      {/* Accordéon des sous-catégories */}
      {isSportOpen && (
        <div className="block-content" style={{ marginLeft: 20 }}>
          <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
            {/* Sous-catégorie Sportifs célèbres */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/sport-sportifs-celebres"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Sportifs célèbres
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Événements sportifs */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/sport-evenements-sportifs"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Événements sportifs
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Vie privée des athlètes */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/vie-privee-des-athletes"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Vie privée des athlètes
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Style sportif */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/style-sportif"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Style sportif
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Nouveau talent */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/nouveau-talent-sport"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Nouveaux talents
                    </Link>
                  </h4>
                </div>
              </div>
            </article>            
            <br />
          </div>
        </div>
      )}
    </section>



    <section className="block-wrap block-posts-small block-sc mb-none" data-id={28}>
      {/* Titre de la section Photos avec chevron */}
      <div
        className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style flex items-center cursor-pointer"
        onClick={togglePhotosSection} // Changez la fonction ici pour que le clic bascule l'état
      >
        <h5
          className="heading"
          style={{
            color: "#0a99da",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {isPhotosOpen ? <BiChevronDown /> : <ChevronRight />} Photos
        </h5>
      </div>

      {/* Accordéon des sous-catégories */}
      {isPhotosOpen && (
        <div className="block-content" style={{ marginLeft: 20 }}>
          <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
            {/* Sous-catégorie Galeries photos */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/photos-galeries-photos"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Galeries photos
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Clichés exclusifs */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/photos-cliches-exclusifs"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Clichés exclusifs
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Moments volés */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/photos-moments-voles"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Moments volés
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Archives people */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/photos-archives-people"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Archives people
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            <br />
          </div>
        </div>
      )}
    </section>


    <section className="block-wrap block-posts-small block-sc mb-none" data-id={28}>
      {/* Titre de la section Videos avec chevron */}
      <div
        className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style flex items-center cursor-pointer"
        onClick={toggleVideosSection} // Changez la fonction ici pour que le clic bascule l'état
      >
        <h5
          className="heading"
          style={{
            color: "#0a99da",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {isVideosOpen ? <BiChevronDown /> : <ChevronRight />} Videos
        </h5>
      </div>

      {/* Accordéon des sous-catégories */}
      {isVideosOpen && (
        <div className="block-content" style={{ marginLeft: 20 }}>
          <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
            {/* Sous-catégorie Interviews vidéo */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/interviews-video"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Interviews vidéo
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Reportages */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/videos-reportages"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Reportages
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Moments backstage */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/videos-moments-backstage"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Moments backstage
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            {/* Sous-catégorie Contenu exclusif */}
            <article className="l-post small-post small-a-post m-pos-left">
              <div className="content">
                <div className="post-meta post-meta-a post-meta-left has-below">
                  <h4 className="is-title post-title">
                    <Link href={"/categorie/videos-contenu-exclusif"} className="white-title">
                      <i className="typcn typcn-chevron-right" /> Contenu exclusif
                    </Link>
                  </h4>
                </div>
              </div>
            </article>

            <br />
          </div>
        </div>
      )}
    </section>
              </div>
            </div>






            {/* Autres blocs de footer */}
            
            <div className="widget col-md-4 ts-block-widget smartmag-widget-posts-small">
              <div className="block">
              <section
                          className="block-wrap block-posts-small block-sc mb-none"
                          data-id={28}
                        >
                          <div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style">
                            <h5
                              className="heading"
                              style={{ color: "#0a99da" }}
                            >
                              Nous Contacter
                            </h5>
                          </div>
                          <div className="block-content">
                            <div className="loop loop-small loop-small-a loop-sep loop-small-sep grid grid-1 md:grid-1 sm:grid-1 xs:grid-1">
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                      <a href="#" className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Carrefour Elig Essono, Yaoundé,
                                        Yaoundé Cameroun
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                      <a href="#" className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        contact@cynomedia.com
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </article>
                              <article className="l-post small-post small-a-post m-pos-left">
                                <div className="content">
                                  <div className="post-meta post-meta-a post-meta-left has-below">
                                    <h4 className="is-title post-title">
                                      <a href="#" className="white-title">
                                        <i className="typcn typcn-chevron-right" />{" "}
                                        Tel: +237 6 78 82 04 04
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                        </section>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lower-footer bold-footer-lower">
                <div className="ts-contain inner">
                  <div className="spc-social-block spc-social spc-social-b ">

                  

                    <a
                      href="https://www.facebook.com/people243/"
                      className="link service s-facebook"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <i className="icon tsi tsi-facebook" />{" "}
                      <span className="visuallyhidden">Facebook</span>
                    </a>
                    <a
                      href="https://x.com/People243C/"
                      className="link service s-twitter"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <i className="icon tsi tsi-twitter" />{" "}
                      <span className="visuallyhidden">X (Twitter)</span>
                    </a>                    
{/*
                    <a
                    href="https://www.dailymotion.com/people234TV"
                    className="link service s-instagram"
                    target="_blank"
                    rel="nofollow noopener"
                    style={{fontWeight:700}}
                  >
                    
                    {" "}d

                  </a>
*/}
                  
                    <a
                      href="https://www.instagram.com/peoplecd243/"
                      className="link service s-instagram"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <i className="icon tsi tsi-instagram" />{" "}
                      <span className="visuallyhidden">Instagram</span>
                    </a>
                    {/*
                    <a
                      href="#"
                      className="link service s-pinterest"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <i className="icon tsi tsi-pinterest-p" />{" "}
                      <span className="visuallyhidden">Pinterest</span>
                    </a>
                    */}
                  </div>
                  <div className="links">
                    <div className="menu-footer-links-container">
                      <p style={{ color: "#0a99da", fontWeight: "bolder" }}>
                        Les autres sites du Réseau:{" "}
                      </p>
                      <ul
                        id="menu-footer-links"
                        className="menu"
                        style={{ justifyContent: "flex-start" }}
                      >
{/*
                        <li
                          id="menu-item-352"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-352"
                        >
                          <a
                            href="#"
                            aria-current="page"
                            className="white-title"
                          >
                            <i className="typcn typcn-world" /> people225.com
                          </a>
                        </li>
                        <li
                          id="menu-item-354"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-cat-10 menu-item-354"
                        >
                          <a
                            href="#"
                            className="white-title"
                          >
                            <i className="typcn typcn-world" /> people223.com
                          </a>
                        </li>
                        <li
                          id="menu-item-355"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-cat-6 menu-item-355"
                        >
                          <a
                            href="#"
                            className="white-title"
                          >
                            <i className="typcn typcn-world" /> people228.com
                          </a>
                        </li>
                        <li
                          id="menu-item-357"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-cat-11 menu-item-357"
                        >
                          <a
                            href="#"
                            className="white-title"
                          >
                            <i className="typcn typcn-world" /> people229.com
                          </a>
                        </li>
*/}
                        <li
                          id="menu-item-353"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-353"
                        >
                          <a href="https://people237.com/" className="white-title">
                            <i className="typcn typcn-world" /> people237.com
                          </a>
                        </li>
                        <li
                          id="menu-item-356"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-356"
                        >
                          <a href="https://journaldekinshasa.com/" className="white-title">
                            <i className="typcn typcn-world" /> 
                            journaldekinshasa.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="copyright white-title">
                    © 2025 Copyright People243.com ©, All Rights Reserved. 
                     | <Link href={'/mentions-legales'} style={{color:"rgb(10 153 219)"}}>Mentions Légales</Link>{" "}                      
                     
                  </div>
                  <br/>
                  <div
  className="copyright-text"
  style={{ color: "white", fontWeight: 600, marginTop: 0, textAlign: "center" }}
>
  <p style={{ color: "white", fontSize: 13, fontWeight: 600, marginBottom: 0 }}>
    <span style={{ color: "white", fontWeight: 600 }}>
      Développé par &nbsp;
      <a
        target="_blank"
        href="https://cynomedia.com/"
        style={{ textDecoration: "none" }}
      >
        <Image
          alt="logo cynomedia"
          loading="lazy"
          width={90}
          height={31}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent", marginTop: "-10px" }}
          src="/images/logo-cynomedia.webp"
        />
      </a>
    </span>
  </p>
</div>
<br/>
                </div>
              </div>
 
    </footer>
  );
}
