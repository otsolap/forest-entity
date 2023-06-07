import AccordionItem from "@/partials/blocks/AccordionItem";
import NextImage from "@/partials/util/NextImage";
import styles from "@/styles/components/accordion.module.scss";

const Accordion = ({ image, accordions}) => {
  return (
    <section className={styles.accordion}>
      <div className={styles.container}>
          {image && (
            <figure className={styles.imgContainer}>
              <NextImage className={styles.image} image={image} />
            </figure>
          )}
          {accordions.data && (
              <div className={styles.content}>
                {accordions.data.map((item, i) => (
                    <AccordionItem key={i} {...item.attributes} />
                ))}
            </div>
          )}
      </div>
    </section>
  )
}

export default Accordion