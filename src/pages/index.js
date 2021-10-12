import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hi!</h2>
          <h3>Welcome to my portfolio :)</h3>
          <Link className={styles.btn} to='/projects'>My portfolio projects</Link>
        </div>
        <img src='/banner.png' alt='site-banner' style={{ maxWidth: '100%' }}></img>
        <p>{title} - {description}</p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`