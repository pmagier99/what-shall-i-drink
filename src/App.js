import NavBar from "./Components/NavBar/NavBar"
import Header from "./Components/Header/Header"
import Button from "./Components/Button/Button"
import Explanation from "./Components/Explanation/Explanation"

function App() {

  //Array of links used for nagivation bar
  const links = ["start", "about"]

  //String used in subheading
  const subheading = "Simply press Start and choose the base of your drink!"

  
  const explanation = ["We look for recipe that contains your selected ingredients,",
                       "Then, we display few propistions, so you can pick which exatcly one you would like to drink."]


  return (
      <>
        <NavBar links={links}/>

        <Header subheading={subheading} />

        <Button styles="start" value="Start" />

        <Explanation explanation={explanation} />
      </>
  );
}

export default App;