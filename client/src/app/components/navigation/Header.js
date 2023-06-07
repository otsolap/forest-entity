import styles from "@/styles/components/header.module.scss";
import Blocks from "@/components/Blocks";
import CustomLink from "@/partials/util/CustomLink";

const Header= ({ navigation }) => {
  const global = navigation.attributes
  const brand = { href: '/', title: global.title ?? null}
  return (
    <>
    <header className={styles.header}>
        <div className={styles.brand}>
            {global.title ? (
              <CustomLink className={styles.title} link={brand} />
            ): null}
            {global.slogan ? (
              <p className={styles.slogan}>{global.slogan}</p>
            ): null}
        </div>
        {global.buttons && (
          global.buttons.map((button, i) => (
                <CustomLink link={button} key={i} className={`${styles.calender} mobile-only button bg-${button.selectTheme}`} />
            ))
          )}
    </header>
      <nav className={styles.navigation}>
        <div className={styles.wrapper}>
          {global.blocks.length ? (
            <div className={styles.menu}>
              <Blocks  blocks={global.blocks} />
            </div>
          ): null}
          {global.buttons && (
            global.buttons.map((button, i) => (
                  <CustomLink link={button} key={i} className={`${styles.calender} button bg-${button.selectTheme}`} />
              ))
            )}
        </div>
        </nav>
    </>
  );
};

export default Header;
