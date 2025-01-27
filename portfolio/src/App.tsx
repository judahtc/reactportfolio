import { useEffect } from "react";
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

import SkillsPic from "./components/SkillsPic";

import Work from "./components/Work";

function App() {
    useEffect(() => {
        const animatedTextOne = document.getElementById("one");

        if (animatedTextOne) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animatedTextOne.classList.add("animate-fade-in");
                        observer.disconnect();
                    }
                });
            });

            // Start observing the element
            observer.observe(animatedTextOne);

            // Cleanup observer when component is unmounted
            return () => {
                observer.disconnect();
            };
        }
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <>
            <div className="fixed w-full z-50">
                <NavBar></NavBar>
            </div>
            <div className="flex items-center shadow-sm pb-32">
                <HeroSection />
                <div className="hidden lg:block md:block">
                    <SkillsPic />
                </div>
            </div>

            <div className="flex items-center">
                <About />
                <div className="hidden lg:block md:block">
                    <MyPic />
                </div>
            </div>

            <Devider />

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
