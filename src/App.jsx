import About from "./components/About"
import Effortless from "./components/Effortless"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <Effortless/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App