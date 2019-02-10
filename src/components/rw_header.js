import React from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navigation from './navigation'

const Header = () => (
    <>
        <div style={{textAlign: "center", maxWidth: "25vw", margin: "0 auto"}}>     
            <StaticQuery
                query={graphql`
                query {
                    placeholderImage: file(relativePath: { eq: "rw_header.png" }) {
                    childImageSharp {
                        fluid(maxHeight: 300) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                    }
                }
                `}
                render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} fadeIn={false} />}
            />
        </div>
        <Navigation />
    </>
)

export default Header