import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg, slug } = data.markdownRemark.frontmatter
    const github = `https://github.com/weronika-p/${slug}`

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={getImage(featuredImg)} alt={title}/>
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
                <button>
                    <a href={github}>Click here to check the project on github</a>
                </button>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                stack
                title
                slug
                featuredImg {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`