import React from 'react'
import Header from '../Components/Header/Header'
import Button from '../Components/Button/Button'
import Explanation from '../Components/Explanation/Explanation'
import {Link} from "react-router-dom";

const Home = () => {


  //String used in subheading
  const subheading = "Simply press Start and type what ingredients you have!"

  //Array of strings that explain how the website works.
  const explanation = ["We look for recipes that contain your selected ingredients,",
                       "Then, we display few propositions, so you can pick which exactly one you would like to try."]

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
