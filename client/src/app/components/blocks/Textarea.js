import styles from "@/styles/components/textarea.module.scss";
import MarkdownBlock from "@/partials/util/MarkdownBlock";

const Textarea = ({ text }) => {
  return (
      text ? (
      <section className={styles.content}>
         <MarkdownBlock className={styles.inputWrapper} markdown={text} /> 
      </section>
      ) : null
  );
};

export default Textarea;
