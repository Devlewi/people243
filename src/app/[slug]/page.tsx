import Image from "next/image";
//import SidebarUnDetailsArticle from "../components/SidebarUnDetailsArticle";
import Link from "next/link";
import { FaEye, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import SidebarUnHome from "../components/SidebarUnHome";
import NotFound from "../not-found";
import ContentDetailPost from "../components/ContentDetailPost";



interface Category {
  name: string;
  slug: string;
  id: number;
}

// Modification pour gérer le warning
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Attendez la promesse


  //const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom-api/publications/slug-categorie/${slug}?page=${currentPage}`);
  /*
  const res = await fetch(
    `https://controlpanel.people237.com/wp-json/custom/v1/article/${slug}`
  );
  */

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom/v1/article/${slug}`,{
      next: { revalidate: 60 },
    }
  );
  
  const post = await res.json();

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featured_image],
    },
  };
}


// Fonction qui récupère les données côté serveur
////"https://controlpanel.people237.com/wp-json/articles/homepage",{
const fetchData = async () => {
  try {
    const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/articles/homepage`,{      
        next: { revalidate: 60 },
      }
    ); // Remplacez par votre URL d'API
    const data = await response.json();

    // Vérifiez si les données nécessaires sont présentes
    const latestPosts = data.recap.latestposts || [];

    // Récupérez uniquement les 11 premiers éléments /15
    return latestPosts.slice(0, 11); // slice(0, 13) récupère les 13 premiers éléments
  } catch (error) {
    console.error("Erreur lors de la récupération des données API", error);
    return []; // Si une erreur se produit, vous retournez un tableau vide
  }
};

const ArticleDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  // Attendre les paramètres dans un composant serveur
  const { slug } = await params;
  const datasidebar = await fetchData();
  //console.log(datasidebar);


  //`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/articles/homepage`,{      
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/wp-json/custom/v1/article/${slug}`,{
        next: { revalidate: 60 },
      }
    );

    //console.log(res);
    if (!res.ok) {
      //throw new Error(`Erreur HTTP: ${res.status}`);

      // Si la réponse est 404, rediriger vers la page 404, sinon afficher un message d'erreur.
      if (res.status === 404) {
        //return <div>Article invalide</div>; // Affiche "Article invalide" lorsque le statut est 404
        //return redirect("/404");
        return <NotFound/>;
        //return redirect("/404");
      } else {
        throw new Error(`Erreur HTTP: ${res.status}`);
      }
    }

    const article = await res.json();
    //console.log(article);

    if (!article) {
      return <div>Article non trouvé</div>;
    }

    const formattedDate = new Date(article.date_published).toLocaleDateString(
      "fr-FR",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

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
                    <nav
                      className="breadcrumbs is-full-width breadcrumbs-a"
                      id="breadcrumb"
                    >
                      <div
                        className="inner ts-contain "
                        style={{ fontWeight: 800 }}
                      >
                        <span>
                          <Link href={"/"}>
                            <i
                              className="typcn typcn-home"
                              style={{ fontSize: 17, color: "#3e3b3b" }}
                            ></i>
                            <span>Accueil</span>
                          </Link>
                        </span>
                        &nbsp;
                        <span className="delim">»</span>
                        &nbsp;
                        <span
                          dangerouslySetInnerHTML={{ __html: article.title }}
                        />
                      </div>
                    </nav>

                    <div className="elementor-widget-container">
                    <div
  className="post-meta-items meta-above"
  style={{ marginTop: 10, marginBottom: 5 }}
>
  {article.categoriesdetails && article.categoriesdetails.length > 0 ? (
    article.categoriesdetails.map((category: Category, index: number) => (
      <span
        key={index}
        className="meta-item cat-labels"
        style={{ paddingTop: 4 }}
      >
        <Link
          href={`/categorie/${category.slug.toLowerCase()}`} // Utilisation du slug ici
          className="category term-color-15"
          rel="category"
        >
          {category.name} {/* Affiche le nom de la catégorie */}
        </Link>
        {/* Séparateur entre les catégories, sauf pour la dernière */}
        {index < article.categoriesdetails.length - 1 && " "}
      </span>
    ))
  ) : (
    <span>Aucune catégorie</span>
  )}
</div>


                      <h1
                        dangerouslySetInnerHTML={{ __html: article.title }}
                        style={{
                          fontFamily: "Roboto Slab, sans-serif !important",
                        }}
                      />
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
                            {article.author} |{" "}
                            <FaEye style={{ marginBottom: -2 }} />{" "}
                            {article.views} vues
                          </a>
                        </span>
                        &nbsp;&nbsp;
                        <span className="meta-item date">
                          <time
                            className="post-date"
                            dateTime="2021-01-13T16:12:14+00:00"
                          >
                            {formattedDate}
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
                        <span style={{ marginTop: 10, fontWeight: 600 }}>
                          Partager sur:{" "}
                        </span>
                        <a
                          href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                            `${process.env.NEXT_PUBLIC_API_BASE_URL}/${article.slug}`
                          )}`}
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
                          <FaFacebookF />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            `${process.env.NEXT_PUBLIC_API_BASE_URL}/${article.slug}`
                          )}&text=${encodeURIComponent(article.title)}`}
                          className="service s-twitter"
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
                          <FaXTwitter />
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                            article.title
                          )}%20${encodeURIComponent(
                            `${process.env.NEXT_PUBLIC_API_BASE_URL}/${article.slug}`
                          )}`}
                          className="service s-whatsapp"
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
                          <IoLogoWhatsapp />
                        </a>
                      </div>

                      <div className="single-featured">
                        <Image
                          src={article.featured_image ? article.featured_image : "/images/default.png"}
                          alt="Image de coco lago"
                          layout="intrinsic"
                          width={788}
                          height={515}
                        />
                      </div>

                      <br />

                      <ContentDetailPost serverContent={article.content}/>
                      {/*
                      <div
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      ></div>
                      */}

                      <div className="post-content-wrap has-share-float">
                        <div
                          className="post-content cf entry-content content-spacious"
                          style={{ fontSize: 14 }}
                        >
                          {/*
                          
                          <center>
                            <Banner336x280/>
                          </center>
                          */}
                          <br /><br />
                          <p style={{ fontWeight: "bolder" }}>
                            {" "}
                            Suivez l&apos;information en direct sur notre chaîne{" "}

                              <a style={{ color: "rgb(5 159 227)", fontWeight:800 }} target="_blank" href="https://whatsapp.com/channel/0029VatnazgKrWQvXqUqsY06"> WHATSAPP </a>

                          </p>
                          {/*
                        <p style={{ fontSize: 16 }}>
                          <b>Tags</b> : class à part, film, rosine nguemgaing
                        </p>
                        */}
                        </div>
                      </div>

                      <br />

                      {/* emplacement articles similaires */}
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
                      <SidebarUnHome articlesidebarunhome={datasidebar} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error); // Log d'erreur détaillé
    return <div>Erreur lors de la récupération des données</div>;
  }
};

export default ArticleDetail;
