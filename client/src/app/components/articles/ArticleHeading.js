import NextImage from "src/app/partials/util/NextImage"
import Link from "next/link"
import styles from '@/styles/components/articleHeading.module.scss'
import config from '@/utils/config'

const ArticleHeading = ({ article, categories, author}) => {
  return (
    <header className={styles.header}>
        <div className={styles.lead}>
            {categories && 
                <Link href={`/${config.blog.CATEGORY_PATH}/${categories.slug}`}>
                    <h4 className={styles.category}>{categories.title}</h4>
                </Link>
                }
                {article.title && <h1>{article.title}</h1>}
                {article.description && <h3>{article.description}</h3>}
            <article className={styles.author}>
                <figure className={styles.authorImageContainer}>
                    <NextImage image={author.image} className={styles.authorImage} />
                </figure>
                <div className={styles.column}>
                    {author.title && <h3 className={styles.title}>{author.title}</h3>}
                    {author.subtitle && <h4>{author.subtitle}</h4>}
                </div>
            </article>
        </div>
        <figure className={styles.imageContainer}>
            <NextImage image={article.image} className={styles.image} />
        </figure>
  </header>
  )
}

export default ArticleHeading