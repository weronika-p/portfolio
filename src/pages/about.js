import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  return (
    <Layout>
      <div>
        <h1>About Me</h1>
        <p>
          Hi! My name is Weronika and I'm a Junior FrontEnd Developer. I'm a
          self-learner. In August 2019 I decided to leave my job and start
          learning for a JS developer. In march 2021 I got into intive Patronage
          2021 programm and after 3 months I accepted their job offer. During my
          2 years of learning I have created few simple projects which you can
          find in Portfolio side page.
        </p>
        <h2>My skills/knowledge:</h2>
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript-logo' height='100px' width='100px' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt='html5-logo' height='100px' width='100px' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt='css3-logo' height='100px' width='100px' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react-logo' height='100px' width='100px' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='redux-logo' height='100px' width='100px' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt='nextjs-logo' height='100px' width='100px' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt='nodejs-logo' height='100px' width='100px' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt='express-logo' height='100px' width='100px' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphql-logo' height='100px' width='100px' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" alt='gatsby-logo' height='100px' width='100px' />
          <StaticImage src='../images/react-native-logo.png' alt='react-native-logo' />
        </div>
      </div>
    </Layout>
  )
}
