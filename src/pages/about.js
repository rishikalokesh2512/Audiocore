import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const AboutPage = () => (
  <Layout>
    <nav style={{float:'left', marginBottom:'100px'}}>
    <Link  to="/home/" style={{padding:'10px'}}>Home</Link>
    <Link to="/about/" style={{padding:'10px'}}>About</Link>
    <Link to="/location/" style={{padding:'10px'}}>Location</Link>
    </nav>
    
    
    <br />
    <h1>About Us</h1>
    
    <p>World's leading headphones sharing app</p>
    </Layout>
  
  
)

export default AboutPage
