"use client";

import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { truncateTitle } from "@/utils/stringUtils";
import he from "he";


interface Article {
  id: number;
  slug: string;
  title: string;
  featured_image: string;
  category: string;
  views: number;
  date_published: string;
  author: string;
  excerpt: string;
}

// Fonction fetcher pour SWR
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erreur lors de la récupération des données");
  return response.json();
};

const SearchContent = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState(false);

  // Définition de l'URL API en fonction de la recherche
  const apiUrl = query
    ? `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom/v1/search/?q=${query}&page=${page}`
    : null; // Ne pas appeler l'API si query est vide

  // Utilisation de SWR pour récupérer les résultats
  const { data, error, isLoading } = useSWR(apiUrl, fetcher, { revalidateOnFocus: false });


  // Gérer l'état des résultats et de la pagination
  const results = data?.results || [];
  const totalPages = data?.pagination?.total_pages || 1;

  const handleSearch = () => {
    if (query.trim() !== "") {
      setSearched(true);
      setPage(1);
    }
  };



  return (
    <div className="container">
      <div className="search-container" style={{ padding: "30px 0", marginTop:20}}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="form-inline d-flex justify-content-center">
              <input
                type="text"
                className="form-control flex-grow-1 mr-1"
                placeholder="Saisir un mot clé..."
                style={{
                  maxWidth: "500px",
                  borderRadius: "30px",
                  padding: "0.8rem",
                  height: 50,
                  border: "2px solid black",
                }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <IoSearchSharp
                size="50"
                color="#dc9002"
                style={{ cursor: "pointer", fontWeight: 800 }}
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
<br/>
      {isLoading && <p className="text-center">Chargement...</p>}
      {error && <p className="text-center text-danger">Erreur lors du chargement des données.</p>}

      {!isLoading && !error && (
        <div className="block-content">
          {results.length > 0 ? (
            <div className="loop loop-grid loop-grid-base grid grid-3 md:grid-3 xs:grid-1">
              {results.map((article: Article) => (
                <article className="l-post grid-post grid-base-post" key={article.id}>
                  <div className="media">
                    <Link
                      href={`/${article.slug}`}
                      className="image-link media-ratio ratio-16-9"
                      title=""
                    >
                      <Image
                        src={article.featured_image || "/images/default.png"}
                        alt={article.title}
                        width={500}
                        height={300}
                        objectFit="cover"
                        quality={75}
                      />
                    </Link>
                    <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                      <Link
                        href={`/categorie/${article.category}`}
                        className="category term-color-3"
                        rel="category"
                        tabIndex={-1}
                      >
                        {article.views} vues
                      </Link>
                    </span>
                  </div>
                  <div className="content">
                    <div className="post-meta post-meta-a has-below">
                      <h2 className="is-title post-title">
                        <Link                         
                        href={{
                          pathname: `/${article.slug}`, // URL dynamique
                        }}                        
                        className="post-title-2">
                          {truncateTitle(he.decode(article.title), 10)}
                        </Link>
                      </h2>
                      <div className="post-meta-items meta-below">
                        Le{" "}
                        {format(new Date(article.date_published), "d MMMM yyyy", { locale: fr })}{" "}
                        Par{" "}
                        <strong>
                          <i
                            className="typcn typcn-user"
                            style={{ fontSize: 15, color: "gray" }}
                          />{" "}
                          {article.author}
                        </strong>
                      </div>
                    </div>
                    <div className="excerpt">{article.excerpt}</div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            searched && <p className="text-center">Aucun résultat trouvé</p>
          )}
        </div>
      )}

      {/* Pagination */}
      {results.length > 0 && (
        <div className="pagination-container text-center" style={{marginBottom:40, marginTop:40 }}>
          <button
            className="btn btn-primary"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Précédent
          </button>
          <span style={{ margin: "0 15px" }}>
            Page {page} / {totalPages}
          </span>
          <button
            className="btn btn-primary"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Suivant
          </button>
        </div>
      )}
    
    </div>
    
  );
};

export default SearchContent;
