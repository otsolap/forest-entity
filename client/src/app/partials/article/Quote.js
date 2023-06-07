import Image from 'next/image'
import Quotation from '@/public/images/quotation.svg'
import styles from '@/styles/components/quote.module.scss'

const Quote = ({ title }) => {
    return (
		<blockquote className={styles.quoteWrapper}>
      <Image src={Quotation} className={styles.quotationMark} alt="Quotation mark" fill sizes="100vw" priority quality={100} />
			  <span className={styles.quote}>
          {title}
        </span>
      <Image src={Quotation} className={styles.quotationMark} alt="Quotation mark" fill sizes="100vw" priority quality={100} />
		</blockquote>
    )
}

export default Quote;