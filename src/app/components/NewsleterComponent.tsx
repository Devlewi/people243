import SubscribeForm from "./NewsletterForm";

const NewsleterComponent = () => {
  return (
    <>
    <div
                            className="elementor-element elementor-element-d22c82c elementor-widget elementor-widget-smartmag-newsletter"
                            data-id="d22c82c"
                            data-element_type="widget"
                            data-widget_type="smartmag-newsletter.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="block-newsletter ">
                                <div className="spc-newsletter spc-newsletter-b spc-newsletter-center spc-newsletter-sm">
                                  <div className="bg-wrap" />
                                  <div className="inner">
                                    <div className="mail-bg-icon">
                                      <i className="tsi tsi-envelope-o" />
                                    </div>
                                    <h3 className="heading">
                                      <i
                                        className="typcn typcn-mail"
                                        style={{ fontSize: 34 }}
                                      />{" "}
                                      s&apos;abonner à la newsletter{" "}
                                    </h3>
                                    <div className="base-text message">
                                      {/*p>Get the latest creative news from SmartMag about art
																&amp; design.</p*/}
                                    </div>
                                    <SubscribeForm/>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
    </>
  )}

  export default NewsleterComponent;