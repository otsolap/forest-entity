import styles from "@/styles/components/header.module.scss";
import CustomLink from "@/partials/util/CustomLink";

const MenuItem = ({ title, href, icon }) => {
  const link = {
    href,
    title
  };

  return (
    <CustomLink className={styles.link} link={link} />
  );
};

export default MenuItem;