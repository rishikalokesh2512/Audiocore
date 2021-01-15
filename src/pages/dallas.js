import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const Location1Page = () => (
  <Layout>
    
    <br />
    <h1>Our Locations</h1>
    
    <p>We are located at dallas</p>
    
    <Link to="/location/" style={{padding:'10px'}}>Go back</Link><br/><br/>
    </Layout>
  
  
)

export default Location1Page
