import NavBar from "./Components/NavBar/NavBar"

function App() {

  //Array of links used for nagivation bar
  const links = ["start", "about"];


  return (
      <>
        <NavBar links={links}/>
      </>
  );
}

export default App;