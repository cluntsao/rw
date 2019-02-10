import React from "react"
import { StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}

      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "home_1800.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{opacity: `0.7`}}/>}
      />
    </Layout>
  )
}




export default IndexPage
