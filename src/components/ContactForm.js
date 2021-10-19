import React from 'react'
import * as styles from '../styles/contact.module.css'

export default function ContactForm({ handleSubmit, handleChange }) {
  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <div className='container'>
        <div className={styles.content}>
            <label>
            Your name:
            <br />
            <input type="text" name="name" onChange={handleChange} />
            </label>
        </div>
        <div className={styles.content}>
            <label>
            Your email:
            <br />
            <input type="email" name="email" onChange={handleChange} />
            </label>
        </div>
        <div className={styles.content}>
            <label>
            Message:
            <br />
            <textarea name="message" onChange={handleChange} />
            </label>
        </div>
    </div>
    <p>
        <button className={styles.contactButton} type="submit">Send Message</button>
    </p>
    </form>
  )
}
