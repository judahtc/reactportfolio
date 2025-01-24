import "./App.css";
import About from "./components/About";
import Articles from "./components/Articles";
import Certs from "./components/Certs";
import Devider from "./components/Divider";
import Events from "./components/Events";
import Experties from "./components/Experties";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MovingSkills from "./components/MovingSkills";
import MyPic from "./components/MyPic";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import SkillsPic from "./components/SkillsPic";

import Work from "./components/Work";

function App() {
    return (
        <>
            <div className="fixed w-full z-50">
                <NavBar></NavBar>
            </div>
            <div className="flex items-center ">
                <HeroSection />
                <SkillsPic />
            </div>
            <Devider />

            <div className="flex items-center ">
                <About />
                <MyPic />
            </div>

            <Certs />

            <Experties />

            <Articles />

            <MovingSkills />
            <Work />
            <Devider />
            <Events />
            <Footer />
        </>
    );
}

export default App;
