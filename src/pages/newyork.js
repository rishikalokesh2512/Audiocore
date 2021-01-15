import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const Location2Page = () => (
  <Layout>
    <nav style={{float:'left', marginBottom:'100px'}}>
    <Link  to="/home/" style={{padding:'10px'}}>Home</Link>
    <Link to="/about/" style={{padding:'10px'}}>About</Link>
    <Link to="/location/" style={{padding:'10px'}}>Location</Link>
    </nav>
    
    
    <br />
    <h1>Our Locations</h1>
    
    <p>We are located at New York</p>
    
    <Link to="/location/" style={{padding:'10px'}}>Go back</Link><br/><br/>
    </Layout>
  
  
)

export default Location2Page
