import { graphql, navigate } from 'gatsby'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactMe({ data }) {
  const [state, setState] = useState({})

  const contact = data.contact.siteMetadata.contact

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <div>
        <h1>Contact Me</h1>
        <p>Like what you see? Email me at {contact} for a quote!</p>
        <ContactForm handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Contact {
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
