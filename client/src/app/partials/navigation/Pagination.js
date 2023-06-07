import styles from "@/styles/components/pagination.module.scss";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <nav className={styles.pagination}>
      {pages.map((page) => (
        <a
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? styles.active : styles.item}
        >
          {page}
        </a>
      ))}
    </nav>
  );
};
export default Pagination;
