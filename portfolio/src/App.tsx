
import './App.css'
import About from './components/About'
import Articles from './components/Articles'
import Certs from './components/Certs'
import Devider from './components/Divider'
import Experties from './components/Experties'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MyPic from './components/MyPic'
import NavBar from './components/NavBar'
import SkillsPic from './components/SkillsPic'
import Work from './components/Work'


function App() {

  return (
    <>
    <NavBar></NavBar>

<div className='flex items-center '>
<HeroSection/>
<SkillsPic/>
</div>
<Devider/>

<div className='flex items-center '>
<About/>
<MyPic/>
</div>



<Certs/>

<Experties/>


<Articles/>

<Work/>

<Footer/>


    
    </>
  )
}

export default App
