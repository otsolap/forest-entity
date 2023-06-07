import NextImage from "@/partials/util/NextImage";
import styles from '@/styles/pages/blog.module.scss'

const ArticleImage = ({  image }) => {
  return (
      image.data ? (
      <figure className={styles.imageContainer}>
        <NextImage image={image} className={styles.image}/>
      </figure>
    ): null
  );
};

export default ArticleImage;