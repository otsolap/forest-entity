import React, { useState } from "react"
import BlogItem from "src/app/partials/blocks/BlogItem"
import CategoryLinks from "src/app/partials/navigation/CategoryLinks"
import Pagination from "src/app/partials/navigation/Pagination"
import { paginate } from "@/utils/index"
import styles from "@/styles/components/blog.module.scss";

const ArchiveSection = ({ items, categories }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 12

  const onPageChange = (page) => {
    setCurrentPage(page)
    const header = document.getElementById("blog-archive-header")
    if (header) {
      header.scrollIntoView({ behavior: "smooth" })
    }
  }

  const paginatedPosts = paginate(items, currentPage, pageSize)

  return (
    <>
      <header className={styles.header}>
        <CategoryLinks categories={categories} />
      </header>
      <div className={styles.wrapper}>
        {paginatedPosts.map((item, i) => {
          return (
            <BlogItem
              key={i}
              image={item.attributes.image}
              title={item.attributes.title}
              description={item.attributes.description}
              slug={item.attributes.slug}
              author={item.attributes.author}
              categories={item.attributes.categories.data[0]?.attributes}
              publishedAt={item.attributes.publishedAt}
            />
          )
        })}
        <Pagination
          items={items.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    </>
  )
}

export default ArchiveSection