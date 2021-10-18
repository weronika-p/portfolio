import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function ContactMe({ data }) {
    const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div>
        <h1>Contact Me</h1>
        <p>Like what you see? Email me at {contact} for a quote!</p>
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

