/* @title: <<gatsby-004-source-blog>> program written in gatsby-JS.
 * @desc: A simple webapp starter with markdown blog posts.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}