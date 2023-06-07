import styles from "@/styles/components/banner.module.scss";
import asideStyles from "@/styles/components/bannerAside.module.scss";
import MarkdownBlock from "@/partials/util/MarkdownBlock";
import NextImage from "@/partials/util/NextImage";
import CustomLink from "@/partials/util/CustomLink";

const Banner = ({ title, description, image, button, selectTheme, isAside }) => {
  return (
      <section className={`${isAside ? asideStyles.banner : styles.banner} bg-${selectTheme}`}>
        {image?.data && (
          <figure className={`${isAside ? asideStyles.imageContainer : styles.imageContainer}`}>
            <NextImage
              className={styles.image}
              image={image}
            />
          </figure>
        )}
        {title || description || button ? (
        <div className={styles.content}>
          {title && (
            <h2 className={styles.title}>{title}</h2>
          )}
          {description && <MarkdownBlock markdown={description} />}
          {button && (
          <footer className={styles.buttonWrapper}>
              <CustomLink link={button} className={`button button--${button.selectTheme}`}  />
          </footer>
        )}
        </div>
        ): null}
      </section>
  );
};

export default Banner;
