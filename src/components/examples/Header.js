import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        data
      }
    }
  }
`

const ComponentName = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default ComponentName
