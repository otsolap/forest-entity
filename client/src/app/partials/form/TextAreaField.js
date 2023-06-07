import React from 'react'
import styles from '@/styles/components/form.module.scss'


const TextAreaField = ({ name, placeholder, formRef }) => {
  return (
    <>
    <label htmlFor={name} className="sr-only">{name}</label>
    <textarea id={name} placeholder={placeholder} ref={formRef}></textarea>
    </>

  )
}

export default  TextAreaField;