import './App.css'
import About from './WasteGrid/components/About'
import Features from './WasteGrid/components/Features'
import Hero from './WasteGrid/components/Hero'
import Navbar from './WasteGrid/components/Navbar'
import WhatIsBuiltFor from './WasteGrid/components/WhatIsBuiltFor'


function App() {
 
  return (
    <div className='w-full m-0 '>
    <Navbar/>
    <Hero/>
    <About/>
    <WhatIsBuiltFor/>
    <Features/>
    </div>
  )
}

export default App
