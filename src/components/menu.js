import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const MenuPage = () => (
  
    <nav style={{float:'left', marginBottom:'100px'}}>
    <Link  to="/" style={{padding:'10px'}}>Home</Link>
    <Link to="/about/" style={{padding:'10px'}}>About</Link>
    <Link to="/location/" style={{padding:'10px'}}>Location</Link>
    </nav>
    
    
   
  
  
)

export default MenuPage
