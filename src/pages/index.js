import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hi!</h2>
          <h3>Welcome to my portfolio :)</h3>
          <Link className={styles.btn} to='/projects'>My portfolio projects</Link>
        </div>
      </section>
    </Layout>
  )
}
