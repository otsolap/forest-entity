import React from 'react'
import styles from '@/styles/components/form.module.scss'

const TextField = ({ name, placeholder, formRef }) => {
  return (
    <>
    <label htmlFor={name} className="sr-only">{name}</label>
    <input
    type={name}
    id={name}
    placeholder={placeholder}
    ref={formRef}
    />
    </>

  )
}

export default TextField;