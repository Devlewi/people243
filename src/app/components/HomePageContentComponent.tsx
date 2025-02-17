/* eslint-disable @typescript-eslint/no-explicit-any */
import LatestPostPeopleHome from "./LatestPostPeopleHome";
import LatestPostPortraitHome from "./LatestPostPortraitHome";
import LatestPostEventHome from "./LatestPostEventHome";
import LatestPostBonPlanHome from "./LatestPostBonPlanHome";
import LatestPostTopStarHome from "./LatestPostTopStarHome";
import SidebarUnHome from "./SidebarUnHome";
import LatestPostSocieteHome from "./LatestPostSocieteHome";
import LatestPostSportHome from "./LatestPostSportHome";
import LatestPostGalerieHome from "./LatestPostGalerieHome";
import LatestPostVideoHome from "./LatestPostVideoHome";
import NewsleterComponent from "./NewsleterComponent";
import LatestPostDecouverteHome from "./LatestPostDecouverteHome";
import SidebarDeuxHome from "./SidebarDeuxHome";



// Définir les props attendues, ici "recapData" qui contient les catégories d'articles.
interface HomePageContentComponentProps {
  recapData: {
    articles: {
      [key: string]: Array<{
        id: number;
        title: string;
        excerpt: string;
        link: string;
        featured_image: string;
        views: number;
        date_published: string ,
        slug: string,
        author:string,
      }>;
    };
    mostviewed: any[];
    latestposts: any[];
  };
}


const HomePageContentComponent: React.FC<HomePageContentComponentProps> = ({ recapData }) => {
const { articles,latestposts,mostviewed } = recapData;

//console.log("recapData.latestposts");
//console.log(latestposts);

  return (
    <>
<div
                  data-elementor-type="wp-page"
                  data-elementor-id={6}
                  className="elementor elementor-6"
                >
                  {/**section people 4 latest posts */}
                  <section
                    className="has-el-gap el-gap-default elementor-section elementor-top-section elementor-element elementor-element-aab5c4e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="aab5c4e"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fdf4a3e"
                        data-id="fdf4a3e"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-bf116e3 elementor-widget elementor-widget-smartmag-grid"
                            data-id="bf116e3"
                            data-element_type="widget"
                            data-widget_type="smartmag-grid.default"
                          >
                            <div className="elementor-widget-container">
                              {/* bloc de 4 articles peoples */}
                              {/*<LatestPostPeopleHome/> */}
                              <LatestPostPeopleHome articlespeople={articles['people'] || []} />                              
                            </div>
                          </div>
                          {/* espace publicitaire */}
                          {/* <Banner728x80Home/> */}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/**section portrait 2 latest posts */}
                 
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
                              <LatestPostPortraitHome articlesportrait={articles['people-portrait'] || []} />                              
                              <br />
                              <br />                              
                              {/*<LatestPostEventHome/>*/}
                              <LatestPostEventHome articlesevent={articles['events'] || []} />
                              <br />
                              <br />
                              <LatestPostDecouverteHome articlesdecouvertes={articles['decouvertes'] || []} />                                                            
                              <br />
                              <br />
                              <LatestPostBonPlanHome articlesbonplan={articles['bons-plans'] || []} />                                                            
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* ts-sticky-col */}
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
                              <SidebarUnHome articlesidebarunhome={latestposts || []}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  {/**section societe 2 latest posts */}
                  <section
                    className="has-el-gap el-gap-default elementor-section elementor-top-section elementor-element elementor-element-0a2f859 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="0a2f859"
                    data-element_type="section"
                    style={{marginTop:30}}
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-28b580e"
                        data-id="28b580e"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          
                          <div
                            className="elementor-element elementor-element-16a41d9 elementor-widget elementor-widget-smartmag-overlay"
                            data-id="16a41d9"
                            data-element_type="widget"
                            data-widget_type="smartmag-overlay.default"
                          >
                            <div className="elementor-widget-container">
                              <LatestPostTopStarHome articlestopstar={articles['top-stars'] || []}/>
                            </div>
                          </div>

<div
                            className="elementor-element elementor-element-f9e65a4 elementor-widget elementor-widget-smartmag-heading"
                            data-id="f9e65a4"
                            data-element_type="widget"
                            data-widget_type="smartmag-heading.default"
                          >                            
                          </div>
                                                    
                        </div>
                      </div>
                    </div>
                  </section>
                  {/**section societe 2 latest posts */}
                  {/**section societe 2 latest posts */}
                  <section
                    className="has-el-gap el-gap-default elementor-section elementor-top-section elementor-element elementor-element-0a2f859 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="0a2f859"
                    data-element_type="section"
                    style={{marginTop:-60}}
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-28b580e"
                        data-id="28b580e"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-f9e65a4 elementor-widget elementor-widget-smartmag-heading"
                            data-id="f9e65a4"
                            data-element_type="widget"
                            data-widget_type="smartmag-heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="block-head block-head-e block-head-e1 is-center">
                                <h4
                                  className="heading"
                                  style={{ fontSize: 25 }}
                                >
                                  <span className="color">
                                    {" "}
                                    <i
                                      className="typcn typcn-world"
                                      style={{ fontSize: 30 }}
                                    />{" "}
                                    Société
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-16a41d9 elementor-widget elementor-widget-smartmag-overlay"
                            data-id="16a41d9"
                            data-element_type="widget"
                            data-widget_type="smartmag-overlay.default"
                          >
                            <div className="elementor-widget-container">
                              <LatestPostSocieteHome articlesociete={articles['societes'] || []}/>                              
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-f9e65a4 elementor-widget elementor-widget-smartmag-heading"
                            data-id="f9e65a4"
                            data-element_type="widget"
                            data-widget_type="smartmag-heading.default"
                          >
                            <div className="elementor-widget-container">
                              <br />
                              <br />
                          
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-1676e4f elementor-widget elementor-widget-smartmag-grid"
                            data-id="1676e4f"
                            data-element_type="widget"
                            data-widget_type="smartmag-grid.default"
                          >
                            <div className="elementor-widget-container">
                              <LatestPostSportHome articlesport={articles['sport'] || []}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>


                  {/**section galerie photo 2 latest posts */}
                  <section
                    className="has-el-gap el-gap-default elementor-section elementor-top-section elementor-element elementor-element-93dadff elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="93dadff"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-425ba08 main-content"
                        data-id="425ba08"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-c1b1b25 elementor-widget elementor-widget-smartmag-grid"
                            data-id="c1b1b25"
                            data-element_type="widget"
                            data-widget_type="smartmag-grid.default"
                          >
                            <div className="elementor-widget-container">
                              
                              <section
                                className="block-wrap block-grid block-sc mb-none"
                                data-id={24}
                                data-block='{"id":"grid","props":{"cat_labels":1,"cat_labels_pos":"bot-left","reviews":"radial","post_formats_pos":"center","load_more_style":"a","meta_cat_style":"text","media_style_shadow":0,"meta_sponsor":1,"meta_sponsor_logo":0,"meta_sponsor_label":"Sponsor: {sponsor}","meta_above":[],"meta_below":["author","date","comments"],"meta_sponsor_above":[],"meta_sponsor_below":["sponsor","date"],"media_ratio":"","media_ratio_custom":"","read_more":"none","content_center":0,"posts":6,"pagination":"1","pagination_type":"load-more","space_below":"none","container_width":66,"heading_colors":"force","heading":"*Latest* Posts","excerpt_length":15,"meta_sponsor_items_default":true,"query_type":"custom","sort_days":null,"carousel_dots":null,"is_sc_call":true,"meta_items_default":true}}'
                              >
                              <LatestPostGalerieHome articlegalery={articles['galerie-photo'] || []}/>
                              <LatestPostVideoHome articlevideo={articles['videos'] || []}/>
                              
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ts-sticky-col */}
                      <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8956b8b main-sidebar main-sidebar"
                        data-id="8956b8b"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-ad07d30 elementor-widget elementor-widget-smartmag-highlights"
                            data-id="ad07d30"
                            data-element_type="widget"
                            data-widget_type="smartmag-highlights.default"
                          >
                            <div className="elementor-widget-container">
                              <SidebarDeuxHome articlesidebardeuxhome={mostviewed || []}/>
                            </div>
                          </div>
                          <NewsleterComponent/>                                                    
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
    </>
  );
};

export default HomePageContentComponent;
