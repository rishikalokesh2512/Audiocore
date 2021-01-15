import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const LocationPage = () => (
  <Layout>
    <nav style={{float:'left', marginBottom:'100px'}}>
    <Link  to="/home/" style={{padding:'10px'}}>Home</Link>
    <Link to="/about/" style={{padding:'10px'}}>About</Link>
    <Link to="/location/" style={{padding:'10px'}}>Location</Link>
    </nav>
    
    
    <br />
    <h1>Our Locations</h1>
    
    <p>We are located here:</p>
    <Link  to="/dallas/" style={{padding:'10px'}}>Dallas</Link><br/><br/>
    <Link to="/newyork/" style={{padding:'10px'}}>New York</Link><br/><br/>
    <Link to="/sanfrancisco/" style={{padding:'10px'}}>San Francisco</Link><br/><br/>
    </Layout>
  
  
)

export default LocationPage
