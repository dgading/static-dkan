/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'
import { Footer } from 'interra-data-catalog-components'

import Header from "./Header";
import NavBar from "./NavBar";

import Theme from '../theme/default'
import GlobalStyles from "../theme/globalStyles";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Header /> {/* siteTitle={data.site.siteMetadata.title} */}
          <div>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
