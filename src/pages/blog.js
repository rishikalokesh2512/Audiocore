import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"


const BlogPage = ({data}) => (
    
  <Layout>
    <br/>
    <h1>Welcome to AudioC0RE</h1>
    <p>World's leading headphones sharing app</p>
    <h2>Latest Posts</h2>
    {data.allMarkdownRemark.edges.map(post =>(
        <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <Img fixed={post.node.frontmatter.featuredImage.childImageSharp.fixed} objectFit="cover"
      objectPosition="50% 50%" />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <br />
            <br />
            <p>{post.node.excerpt}</p>

        </div>
    ))}
    </Layout>
  
  
)

export const pageQuery = graphql`
query BlogIndexQuery{

        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        author
                        title
                        path
                        date
                        featuredImage{
                            childImageSharp{
                                fixed(width:300, height:300){
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                    excerpt
                
                }
            }
        }
    
}`

export default BlogPage
