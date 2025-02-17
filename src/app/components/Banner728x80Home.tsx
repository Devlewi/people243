"use client"
import { useEffect } from "react";

const Banner728x80Home = () => {
  useEffect(() => {
    // Charger le script Revive Adserver uniquement côté client
    const script = document.createElement("script");
    script.src = "//client.cynomedia-africa.com/www/delivery/asyncjs.php";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elementor-element elementor-element-5f64193 elementor-hidden-phone elementor-widget elementor-widget-smartmag-codes"
      data-id="5f64193"
      data-element_type="widget"
      data-widget_type="smartmag-codes.default"
    >
      <div className="elementor-widget-container">
        <div className="a-wrap">
          {/* Revive Adserver Asynchronous JS Tag - Generated with Revive Adserver v5.4.1 */}
          <ins data-revive-zoneid="211" data-revive-id="97f3bbebf0ebdc5eed163b8fac6171c8"></ins>
        </div>
      </div>
    </div>
  );
};

export default Banner728x80Home;
