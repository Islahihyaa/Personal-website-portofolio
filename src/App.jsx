import NavbarComponent from "./components/NavbarComponent"
import HomePage from "./components/HomePage"
import About from "./components/About"
import Portofolio from "./components/Portofolio"
import Sidebar from "./components/Sidebar"
import Contact from "./components/Contact"


const App = () => {
  return (
    <>
    <NavbarComponent/>

    <HomePage/>
    <About/>
    <Contact/>
    <Portofolio/>
    <Sidebar/>
    
    </>

  )
}

export default App