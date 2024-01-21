import About from "./About"
import Contact from "./Contact"
import HomePage from "./HomePage"
import NavbarComponent from "./NavbarComponent"
import Portofolio from "./Portofolio"
import Scroll from "./Scroll"
import Sidebar from "./Sidebar"

const Layout = () => {
  return (
    <>
    <NavbarComponent/>

    <HomePage/>
    <About/>
    <Portofolio/>
    <Sidebar/>
    
    </>

  )
}

export default Layout