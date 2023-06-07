import YoutubeEmbed from "@/partials/util/YoutubeEmbed";
import styles from '@/styles/pages/blog.module.scss'

const ArticleEmbed = ({ url }) => {
  return (url ? (
        <div className={styles.videoContainer}>
          <YoutubeEmbed url={url} />
        </div>
      ): null
  );
};

export default ArticleEmbed;
