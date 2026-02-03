import * as styles from './index.module.css'

import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from 'gatsby'

import { Layout } from 'src/components/layout/Layout'
import { Header } from 'src/components/layout/Header'
import { CubeList } from 'src/components/CubeList'

const IndexPage: React.FC<PageProps<Queries.HomePageQuery>> = (props) => {
  const cubes = [...props.data.allCubesYaml.cubes]

  return (
    <Layout>
      <div className={styles.container}>
        <Header />

        <CubeList title="2025 Cubes" cubes={cubes} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    allCubesYaml {
      cubes: nodes {
        name
        url
        designer
        designerURL
        imageURL
        description
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>2025 Cubes - The Salt Box</title>

      <meta
        property="og:image"
        content="http://thesaltbox.fun/the-salt-box-og.jpg"
      />
      <meta property="og:image-width" content="1200" />
      <meta property="og:image-height" content="630" />

      <meta property="og:title" content="The Salt Box" />

      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
