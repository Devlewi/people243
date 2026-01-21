"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidebarUnHome from "./SidebarUnHome";
import TransitionPage from "./TransitionPage";
import { format } from "date-fns";
import { fr } from "date-fns/locale"; // Pour la langue française
import { truncateTitle } from "@/utils/stringUtils";
import he from "he";

type Post = {
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

type SidebarData = {
  articlesidebarunhome: Post[];
};

interface CategoryContentProps {
  sidebarData: SidebarData;
  categoryPosts: Post[];
  categoryName: string;
  pagination: {
    currentPage: number;
    totalPages: number;
  };
}

const CategoryContent = ({
  sidebarData,
  categoryPosts,
  categoryName,
  pagination,
}: CategoryContentProps) => {
  const { currentPage, totalPages } = pagination;
  const [loading, setLoading] = useState(false); // Change loading state

  // Fonction pour gérer le changement de page
  // Fonction pour gérer le changement de page, maintenant elle accepte un argument pour la nouvelle page
  const handlePageChange = (newPage: number) => {
    setLoading(true); // Start loading
    // Ensure newPage is valid before proceeding
    if (newPage >= 1 && newPage <= totalPages) {
      // Simulate data fetching (replace this with actual data fetching logic)
      setTimeout(() => {
        setLoading(false); // End loading
      }, 1500); // Adjust delay as needed
    }
  };

  // Générer les liens de pagination
  const paginationLinks = [];
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  if (currentPage > 3) paginationLinks.push(1); // Ajouter la première page si la page actuelle est supérieure à 3
  if (currentPage > 4) paginationLinks.push("..."); // Ajouter les ellipses si nécessaire

  for (let i = startPage; i <= endPage; i++) {
    paginationLinks.push(i);
  }

  if (currentPage < totalPages - 2) paginationLinks.push("..."); // Ajouter les ellipses si nécessaire
  if (currentPage < totalPages - 1) paginationLinks.push(totalPages); // Ajouter la dernière page

  console.log("sidebarData = ");
  console.log(sidebarData);
  return (
    <>
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
                  <div className="elementor-widget-container">
                    <section
                      className="block-wrap block-posts-list block-sc mb-none"
                      data-id={9}
                    >
                      <div className="block-head block-head-c is-left">
                        <h4 className="heading" style={{ fontSize: 25 }}>
                          <span className="color">
                            {/*
                            <i
                              className="typcn typcn-folder"
                              style={{ fontSize: 30 }}
                            />{" "}
                            */}
                            {he.decode(categoryName)}
                          </span>
                        </h4>
                      </div>

                      <div className="block-content">
                        {loading ? (
                          <>
                            <TransitionPage />
                          </>
                        ) : (
                          <div className="loop loop-grid loop-grid-base grid grid-2 md:grid-2 xs:grid-1">
                            {/* Affichage des articles */}
                            {categoryPosts.length > 0 ? (
                              categoryPosts.map((post: Post) => (
                                <article
                                  key={post.id}
                                  className="l-post grid-post grid-base-post"
                                >
                                  <div className="media">
                                    <Link
                                      href={`/${post.slug}`}
                                      className="image-link media-ratio ratio-16-9"
                                      title={post.title}
                                    >
                                      <Image
                                        src={post.featured_image ? post.featured_image : "/images/default.png"}
                                        alt={post.title}
                                        layout="intrinsic"
                                        width={377}
                                        height={377}
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
                                        {post.views} vues
                                      </Link>
                                    </span>
              {/* Crédit photo à l'extrême droite (même alignement) */}
        {post.photo_credit && (
          <span className="cat-labels cat-labels-overlay c-overlay p-bot-right">
            <span className="category" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '10px' }}>
              {post.photo_credit}
            </span>
          </span>
        )}
        
                                  </div>
                                  <div className="content">
                                    <div className="post-meta post-meta-a has-below">
                                      <h2 className="is-title post-title">
                                        <Link
                                          href={`/${post.slug}`}
                                          className="post-title-2"
                                        >
                                          {truncateTitle(he.decode(post.title), 7)}{" "}
                                        </Link>
                                      </h2>
                                      <div className="post-meta-items meta-below">
                                        <span className="meta-item post-author">
                                          <span className="by">
                                            Le{" "}
                                            {format(
                                              new Date(post.date_published),
                                              "d MMMM yyyy",
                                              {
                                                locale: fr,
                                              }
                                            )}{" "}
                                            par{" "}
                                          </span>{" "}
                                          <a
                                            href="#"
                                            title="Posts by Shane Doe"
                                            rel="author"
                                          >
                                            <i
                                              className="typcn typcn-user"
                                              style={{
                                                fontSize: 15,
                                                color: "gray",
                                              }}
                                            />{" "}
                                            {post.author}
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="excerpt">
                                      <p>{post.excerpt}</p>
                                    </div>
                                  </div>
                                </article>
                              ))
                            ) : (
                              <p>Aucun article pour l&apos;instant.</p> // Affichage du message si aucun article
                            )}
                          </div>
                        )}
                      </div>
                    </section>

                    {/* Animation de chargement */}

                    {/* Pagination */}
                    {categoryPosts.length > 0 ? (
                      <>
                      <br />
                    <nav
                      className="main-pagination pagination-numbers"
                      data-type="numbers"
                    >
                      <Link
                        href={`?page=${currentPage - 1}`}
                        className={`prev page-numbers ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                        onClick={(e) => {
                          if (currentPage === 1) {
                            e.preventDefault(); // Empêche l'action du clic si c'est la première page
                          } else {
                            handlePageChange(currentPage - 1); // Si ce n'est pas la première page, on change la page
                          }
                        }}
                      >
                        <span className="visuallyhidden">Previous</span>
                        <i className="tsi tsi-angle-left" />
                      </Link>

                      {/* Pagination Links */}
                      {paginationLinks.map((page, index) => (
                        <span key={index}>
                          {page === "..." ? (
                            <span className="page-numbers dots">...</span>
                          ) : (
                            <Link
                              href={`?page=${page}`}
                              className={`page-numbers ${
                                currentPage === page ? "current" : ""
                              }`}
                              onClick={() => {
                                //e.preventDefault(); // Prevent default navigation behavior
                                handlePageChange(Number(page)); // Convert page to a number
                              }}
                            >
                              {page}
                            </Link>
                          )}
                        </span>
                      ))}

                      <Link
                        href={`?page=${currentPage + 1}`}
                        className={`next page-numbers ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                        onClick={(e) => {
                          if (currentPage === totalPages) e.preventDefault(); // Disable click if it's the last page
                          handlePageChange(currentPage + 1);
                        }}
                      >
                        <span className="visuallyhidden">Next</span>
                        <i className="tsi tsi-angle-right" />
                      </Link>
                    </nav>
                      </>
                    ):(
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ca6b821 main-sidebar main-sidebar ts-sticky-col"
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
                    {/* Sidebar Dynamique */}

                    {/* <SidebarUnHome articlesidebarunhome={sidebarData} /> */}
                    <SidebarUnHome
                      articlesidebarunhome={
                        sidebarData && Array.isArray(sidebarData)
                          ? sidebarData
                          : []
                      }
                    />
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

export default CategoryContent;
