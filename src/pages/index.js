import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Weronika P.'s portfolio</title>
        <html lang="en" amp />
      </Helmet>
      <section className={styles.header}>
        <div>
          <h2>Hi - I'm Weronika!</h2>
          <h3>Welcome to my portfolio :)</h3>
          <Link className={styles.btn} to="/projects">
            My portfolio projects
          </Link>
        </div>
        <StaticImage src='../images/banner.png' alt='banner'/>
      </section>
    </Layout>
  )
}
