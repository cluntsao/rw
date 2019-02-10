import React from 'react'
import RW_Link from './rw_link';
import { Link } from 'gatsby';


const Navigation = () => (
    <div style={{display:"flex", justifyContent: "space-around", backgroundColor: "black", padding: "0.5vh 10vw"}}>
        <RW_Link to="/" title="HOME"/>
        <RW_Link to="/page-2/" title="Page2"/>
        <RW_Link to="/about/" title="ABOUT"/>
        <RW_Link to="/contact/" title="CONTACT"/>
        <RW_Link to="/blog/" title="BLOG"/>
        <RW_Link to="/links/" title="LINKS"/>
        <RW_Link to="/store/" title="STORE"/>
        <RW_Link to="/advertise/" title="ADVERTISE"/>
        
    </div>
)

export default Navigation