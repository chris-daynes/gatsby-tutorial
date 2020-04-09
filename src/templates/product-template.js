import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    product: {
      title,
      price,
      info: { info },
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to={"/products"}>back to products page</Link>
        <h1>Single Product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      info {
        info
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
