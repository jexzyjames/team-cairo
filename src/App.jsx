import './App.css'
import About from './WasteGrid/components/About'
import Features from './WasteGrid/components/Features'
import Hero from './WasteGrid/components/Hero'
import Navbar from './WasteGrid/components/Navbar'
import Rewards from './WasteGrid/components/Rewards'
import WhatIsBuiltFor from './WasteGrid/components/WhatIsBuiltFor'
import Accordion from './WasteGrid/components/Accordion'
import Footer from './WasteGrid/components/Footer'
function App() {
 
  return (
    <div className='w-full relative m-0 '>
    <Navbar/>
    <Hero/>
    <About/>
    <WhatIsBuiltFor/>
    <Features/>
    <Rewards/>
    <Accordion/>
    <Footer/>

    </div>
  )
}

export default App
