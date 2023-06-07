import NextImage from "src/app/partials/util/NextImage"
import CustomLink from "src/app/partials/util/CustomLink"
import styles from '@/styles/components/articleFooter.module.scss'

const ArticleFooter = ({ author }) => {
  return (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <figure className={styles.imageContainer}>
                <NextImage image={author.image} className={styles.image} />
            </figure>
        </div>
        <div className={styles.column}>
            <article className={styles.wrapper}>
                {author.title && <h3>{author.title}</h3>}
                {author.description && <p>{author.description}</p>}
                {author.buttons && (
                    author.buttons.map((button, i) => (
                  <CustomLink link={button} key={i} className={`button bg-${button.selectTheme}`} />
              ))
            )}
            </article>
        </div>
  </footer>
  )
}

export default ArticleFooter