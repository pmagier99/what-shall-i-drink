import React from 'react'
import Header from '../Components/Header/Header'

const NoPage = () => {
  
  //String used in subheading
  const subheading = "This page does not exist."

  return (
    <>
      <Header subheading={subheading} />
    </>
  )
}

export default NoPage
