
import './App.css'
import About from './components/About'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import SkillsPic from './components/SkillsPic'


function App() {

  return (
    <>
    <NavBar></NavBar>

<div className='flex items-center '>
<HeroSection/>
<SkillsPic/>
</div>
<About/>



    
    </>
  )
}

export default App
