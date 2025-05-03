import './App.css'
import Main from './components/Main'
import About from './WasteGrid/components/About'
import Hero from './WasteGrid/components/Hero'
import Navbar from './WasteGrid/components/Navbar'


function App() {
 
  return (
    <div className='w-full m-0 '>
    <Navbar/>
    {/* <Main  /> */}
    <Hero/>
    <About/>
    </div>
  )
}

export default App
