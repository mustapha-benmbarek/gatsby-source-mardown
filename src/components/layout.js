/* @title: <<gatsby-004-source-blog>> program written in gatsby-JS.
 * @desc: A simple webapp starter with markdown blog posts.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/bootstrap.min.css"
import "../styles/index.css"

const Layout = props => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
