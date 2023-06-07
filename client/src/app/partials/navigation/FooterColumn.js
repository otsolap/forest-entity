"use client"; // This is a client component 👈🏽
import React, { useEffect, useRef } from "react"
import useToggle from "@/hooks/useToggleState"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import MarkdownBlock from "@/partials/util/MarkdownBlock"
import CustomLink from "@/partials/util/CustomLink"
import styles from '@/styles/components/footer.module.scss'

const FooterColumn = ({ id, open, title, description, links }) => {
  const contentRef = useRef(null)
  const [active, setActive] = useToggle(open)

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px"
  }, [contentRef, active])

  const toggleAccordion = () => {
    setActive(!active)
  }

  return (
    <div key={id} className={styles.column}>
      <div className={styles.button} onClick={toggleAccordion}>
        <div className={styles.wrapper}>
          <div className={active ? `${styles.open}` : `${styles.closed}`}>
            <div className={styles.flexBox}>
              <h4 className={styles.heading}>{title}</h4>
              <FontAwesomeIcon
                className={styles.icon}
                aria-label="Alatunnisteen lisätieto"
                icon={active ? faAngleUp : faAngleDown}
              />
            </div>
          </div>
          <div
            ref={contentRef}
            className={
              active
                ? `${styles.content} ${styles.contentDivider}`
                : `${styles.content}`
            }
          >
            {description && <MarkdownBlock markdown={description} />}
            {links ? (
            <div className={styles.linkWrapper}>
              {links.map((link, id) => (
               <CustomLink key={id} className={styles.link} link={link} />
              ))}
            </div>
            ): null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterColumn
