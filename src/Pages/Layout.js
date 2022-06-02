import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import {Outlet} from "react-router-dom"

const Layout = () => {
  
  //Array of links used for nagivation bar
  const links = ["start", "about"]

  return (
    <>
      <NavBar links={links}/>
      <Outlet />
    </>
  )
}

export default Layout
