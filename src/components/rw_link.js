import React from 'react'
import { Link } from 'gatsby';

const RW_Link = ({ to, title }) => (
    <Link to={to} style={{color: "white", fontSize:"1rem", textDecoration: "none"}} activeStyle={{color: "gold"}} >{title}</Link>
)

export default RW_Link