const path = require('path');
const axios = require('axios').default;

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions: { createPage } }) => {

  const { data: jsonData } = await axios.get('http://d8.dkandemo.nuamsdev.com/api/v1/search-index.json');
  const { data: collections } = await axios.get('http://d8.dkandemo.nuamsdev.com/api/v1/collections/theme.json');

  createPage({
    path: `/`,
    component: path.resolve('./src/templates/home/index.js'),
    context: { collections }
  })

  createPage({
    path: `/search`,
    component: path.resolve('./src/templates/search/index.js'),
    context: { collections }
  })

  jsonData.forEach(data => {
    const dataset = data.doc;
    createPage({
      path: `/dataset/${dataset.identifier}`,
      component: path.resolve('./src/templates/dataset/index.js'),
      context: { dataset }
    })
  })

}

