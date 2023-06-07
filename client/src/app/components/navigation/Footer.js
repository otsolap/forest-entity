import Blocks from "@/components/Blocks";
import styles from '@/styles/components/footer.module.scss'
import CustomLink from '@/partials/util/CustomLink'

const Footer = ({ footer }) => {
  const global = footer.attributes
  return (
    <>
      <footer className={styles.footer}>
        {global.blocks.length ? (
          <div className={styles.columnContainer}>
            <Blocks  blocks={global.blocks} />
          </div>
        ): null}
        {global.subFooter ? (
          <div className={styles.subFooter}>
            <div className={styles.columnContainer}>
              <span className={styles.brand}>{global.subFooter.title} &#169; {new Date().getFullYear()} </span> 
              <span className={"desktop-only"}> &#124;</span> 
                {global.subFooter.link ?  (
                  <CustomLink className={styles.legal} link={global.subFooter.link} />
                ): null}
            </div>
          </div>
        ): null}
      </footer>
    </>
  );
};

export default Footer;
