import React from 'react'
import Header from '../Components/Header/Header'
import Button from '../Components/Button/Button'
import Explanation from '../Components/Explanation/Explanation'
import {Link} from "react-router-dom";

const Home = () => {


  //String used in subheading
  const subheading = "Simply press Start and choose the base of your drink!"

  //Array of strings that explain how the website works.
  const explanation = ["We look for recipe that contains your selected ingredients,",
                       "Then, we display few propistions, so you can pick which exatcly one you would like to drink."]

  return (
    <>
      <Header subheading={subheading} />

      <Link to="/start">
        <Button styles={"start"} value={"Start"}/>
      </Link>

      <Explanation explanation={explanation} />
    </>
  )
}

export default Home