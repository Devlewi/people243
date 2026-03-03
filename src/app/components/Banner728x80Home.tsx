"use client"
import { useEffect } from "react";

const Banner728x80Home = () => {
  useEffect(() => {
    // Charger le script Revive Adserver uniquement côté client
    const script = document.createElement("script");
    script.src = "//adserver.cynomedia.com/www/delivery/asyncjs.php";
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
          <ins data-revive-zoneid="219" data-revive-id="16a6633e0a24be5cdd88d46adf91ea32"></ins>
        </div>
      </div>
    </div>
  );
};

export default Banner728x80Home;
