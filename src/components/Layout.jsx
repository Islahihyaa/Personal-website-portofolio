import About from "./About"
import Contact from "./Contact"
import HomePage from "./HomePage"
import NavbarComponent from "./NavbarComponent"
import Portofolio from "./Portofolio"
import Scroll from "./Scroll"

const Layout = () => {
  return (
    <>
    <NavbarComponent/>
    <HomePage/>
    <Scroll/>
    <hr />
    <About/>
    <hr />
    <Portofolio/>
    <hr />
    <Contact/>
    
    </>

  )
}

export default Layout