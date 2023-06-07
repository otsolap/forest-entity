"use client"; // This is a client component 👈🏽
import React, { useRef } from 'react';
import axios from 'axios';
import Inputs from '@/components/Inputs';
import styles from '@/styles/components/form.module.scss';
import config from '@/utils/config'

const FormEmbed = ({ form }) => {
  const formRef = useRef(null);
  const { title, description, inputs, button, endpoint } = form.data.attributes;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    inputs.forEach((input) => {
      if (formRef.current[input.name]) {
        formData[input.name] = formRef.current[input.name].value;
      }
    });
  
    const data = { data: formData };
  
    axios.post(`${config.forms.COLLECTIONS_PATH || 'http://localhost:1337/api'}/${endpoint}`, data).then((response) => {
        console.log(response); // handle the response from the server
    })
    .catch((error) => {
      const errorMessage =
      error.response?.data?.error?.message || 'Unknown error. Blame your internet.';
      console.log(errorMessage);
    })
    .finally(() => {
    });
  };

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
      </header>
      {inputs.length ? (
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <Inputs inputs={inputs} formRef={formRef} />
          </div>
          {button && (
            <button type="submit" value="submit" className={`button button--${button.selectTheme}`} >
              {button.title}
            </button>
          )}
        </form>
      ) : null}
    </section>
  );
};

export default FormEmbed;