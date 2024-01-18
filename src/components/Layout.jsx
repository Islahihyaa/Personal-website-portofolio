import About from "./About"
import Contact from "./Contact"
import HomePage from "./HomePage"
import NavbarComponent from "./NavbarComponent"
import Portofolio from "./Portofolio"

const Layout = () => {
  return (
    <>
    <NavbarComponent/>
    <HomePage/>
    <hr />
    <About/>
    <hr />
    <Portofolio/>
    <Contact/>
    </>

  )
}

export default Layout