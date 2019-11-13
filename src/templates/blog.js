/* @title: <<gatsby-004-source-blog>> program written in gatsby-JS.
 * @desc: A simple webapp starter with markdown blog posts.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = props => {
  return (
    <Layout>
      <main role="main" className="inner cover">
        <h1 className="cover-heading">
          {props.data.markdownRemark.frontmatter.title}.
        </h1>
        <p className="lead">
          Created On {props.data.markdownRemark.frontmatter.date}
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </p>
        <p className="lead">
          <Link className="btn btn-lg btn-secondary" to="/blog/">
            Back
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default Blog;
