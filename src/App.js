import NavBar from "./Components/NavBar/NavBar"
import Header from "./Components/Header/Header"
import Button from "./Components/Button/Button"

function App() {

  //Array of links used for nagivation bar
  const links = ["start", "about"]

  //String used in subheading
  const subheading = "Simply press Start and choose the base of your drink!"


  return (
      <>
        <NavBar links={links}/>

        <Header subheading={subheading} />

        <Button styles="start" value="Start" />
      </>
  );
}

export default App;