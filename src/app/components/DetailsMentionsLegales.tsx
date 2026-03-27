const DetailsMentionsLegales = ({
  content,
  title,
}: {
  content: string;
  title: string;
}) => {
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id={6}
      className="elementor elementor-6"
    >
      <br />

      <section className="has-el-gap elementor-section elementor-top-section elementor-section-boxed">
        <div className="elementor-container elementor-column-gap-no">
          
          <div className="elementor-column elementor-col-66 main-content">
            <div className="elementor-widget-wrap elementor-element-populated">

              {/* TITRE dynamique */}
              <h1
                className="is-title post-title"
                dangerouslySetInnerHTML={{ __html: title }}
                style={{
                  fontFamily: "Roboto Slab,sans-serif",
                  fontSize: 32,
                }}
              />

              <br />

              {/* CONTENU dynamique */}
              <div
  className="post-content cf entry-content content-spacious"
  style={{ fontSize: 15 }}
>
  <div
    className="mentions-content"
    dangerouslySetInnerHTML={{ __html: content }}
  />
</div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default DetailsMentionsLegales;