import React from 'react'
import Header from '../Components/Header/Header'
import InputForm from '../Components/InputForm/InputForm'
import Button from '../Components/Button/Button'

const Start = () => {

  //String used in subheading
  const subheading = "Simply type what ingredients you have!"

  return (
    <>
      <Header subheading={subheading} />

      <InputForm />

      <Button value="Search"/>
    </>
  )
}

export default Start
