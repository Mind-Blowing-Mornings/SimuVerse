import './App.css'
import Section from './components/Features/Section'
// import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Works from './components/Works/Works'
function App() {

  return (
    <>
    {/* <Navbar></Navbar> */}

    <Hero></Hero>
    <div className='Features_div'>
    <Section></Section>
      <Works></Works>
    </div>
    </>
  )
}

export default App
