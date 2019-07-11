import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Hero, IconList, IconListItem } from 'interra-data-catalog-components'

import image from '../../images/waves.jpg'

const Home = ({ pageContext: { collections } }) => {
  const items = collections.map(x => {
    let item = {
      identifier: x.identifier,
      ref: `search?theme=${x.title}`,
      title: x.title,
      color: '#0E76BC',
      //icon: x.icon,
    }
    return item
  });

  return(
    <Layout>
      <SEO title="Home" />
      <Hero image={image}/>
      <IconList items={ items } component={ IconListItem } paneTitle="Dataset Topics" />
    </Layout>
  );
}

export default Home;