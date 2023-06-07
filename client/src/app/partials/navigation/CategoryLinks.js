"use client"; // This is a client component 👈🏽
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@/styles/components/categoryLinks.module.scss';
import config from '@/utils/config'

function CategoryLinks({ categories }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]);

  const renderLinks = () => {
    if (isDesktop) {
      return (
        <ul className={styles.wrapper}>
          {categories.map((category, id) => (
            <li className={styles.item} key={id}>
              <Link
                className={`button ${styles.button}`}
                href={`/${config.blog.CATEGORY_PATH}/${category.attributes.slug}`}
              >
                {category.attributes.title}
              </Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <select
          className={`button ${styles.select}`}
          onChange={(e) => {
            window.location.href = e.target.value;
          }}
        >
          {categories.map((category, id) => (
            <option
              value={`/${config.blog.CATEGORY_PATH}/${category.attributes.slug}`}
              key={id}
            >
              {category.attributes.title}
            </option>
          ))}
        </select>
      );
    }
  };

  return renderLinks();
}

export default CategoryLinks;
