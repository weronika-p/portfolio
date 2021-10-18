import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { devLogos, HEIGHT, WIDTH } from '../assets/dev-logo'

export default function About() {
  return (
    <Layout>
      <div>
        <StaticImage 
          src='../images/profile-pic.png'
          alt='profile-picture'
          width={200}
          height={200}
        />
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
          {devLogos.map(logo => {
            return (
              <img
                src={logo.src}
                alt={`${logo.name}-logo`}
                height={HEIGHT}
                width={WIDTH}
              />
            )
          })}
          <StaticImage
            src="../images/react-native-logo.png"
            alt="react-native-logo"
          />
        </div>
      </div>
    </Layout>
  )
}
