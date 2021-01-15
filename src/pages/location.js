import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const LocationPage = () => (
  <Layout>
    
    
    <br />
    <h1>Our Locations</h1>
    
    <p>We are located here:</p>
    <Link  to="/dallas/" style={{padding:'10px'}}>Dallas</Link><br/><br/>
    <Link to="/newyork/" style={{padding:'10px'}}>New York</Link><br/><br/>
    <Link to="/sanfrancisco/" style={{padding:'10px'}}>San Francisco</Link><br/><br/>
    </Layout>
  
  
)

export default LocationPage
