import SubscribeForm from "./NewsletterForm";

const NewsleterComponentHeader = () => {
  return (
    <>
      <div className="off-canvas-widgets">
        <div
          id="smartmag-block-newsletter-2"
          className="widget ts-block-widget smartmag-widget-newsletter"
        >
          <div className="block">
            <div className="block-newsletter ">
              <div className="spc-newsletter spc-newsletter-b spc-newsletter-center spc-newsletter-sm">
                <div className="bg-wrap" />
                <div className="inner">
                  <h3 className="heading">s&apos;abonner à la newsletter </h3>
                  <div className="base-text message">
                    <p>
                      Recevez les dernières actualités directement dans votre
                      boîte mail !
                    </p>
                  </div>
                  <SubscribeForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsleterComponentHeader;
