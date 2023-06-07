import styles from "@/styles/components/mediaMix.module.scss";
import NextImage from "@/partials/util/NextImage";
import MarkdownBlock from "@/partials/util/MarkdownBlock";
import YoutubeEmbed from "@/partials/util/YoutubeEmbed";

const MediaMixItem = ({ type, image, video, markdown}) => {
  return (
    <div className={styles.mediaMixColumn}>
      {type == "video" && video ? (
        <div className={styles.videoContainer}>
          <YoutubeEmbed url={video} />
        </div>
      ): null}
      {type == "image" && image.data ? (
        <figure className={styles.imageContainer}>
          <NextImage
            image={image}
            className={styles.image}
          />
        </figure>
      ): null}
      {type == "markdown" && markdown && (
        <div className={styles.markdown}>
          <MarkdownBlock markdown={markdown} />
        </div>
      )}
    </div>
  );
};

export default MediaMixItem;
