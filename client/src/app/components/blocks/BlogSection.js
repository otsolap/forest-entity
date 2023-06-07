"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import styles from "@/styles/components/blog.module.scss";
import BlogItem from "src/app/partials/blocks/BlogItem";
import CustomLink from "src/app/partials/util/CustomLink";
import axios from "axios";
import { getStrapiURL } from "@/utils/index";
import config from '@/utils/config'

export default function BlogSection({ title, description, selectTheme, blogs, filter, link }) {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(getStrapiURL(`/${config.blog.CONTENT_BLOG_SECTION_LATEST_QUERY}`));
      setItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (filter === 'latest') {
      fetchData();
    }
  }, [filter]);

  const blogItems = filter === "latest" ? items : blogs;

  return (
    <section className={selectTheme == 'primary' ? styles.bgPrimary : styles.bgSecondary}>
      {title || description ? (
        <header className={styles.header}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </header>
      ) : null}
      {blogItems?.data?.length ? (
        <div className={styles.wrapper}>
          {blogItems.data.map((item, i) => {
            return (
              <BlogItem
                key={i}
                image={item.attributes.image}
                title={item.attributes.title}
                description={item.attributes.description}
                categories={item.attributes.categories.data[0]?.attributes}
                publishedAt={item.attributes.publishedAt}
                slug={item.attributes.slug}
              />
            );
          })}
        </div>
      ) : null}
      {link ? (
        <footer className={styles.linkWrapper}>
          <CustomLink className={styles.archiveLink} link={link} />
        </footer>
      ) : null}
    </section>
  );
};
