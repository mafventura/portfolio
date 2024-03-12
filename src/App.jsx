//Components
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
    return (
        <>
            <div
                class="bg-[url('../public/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg')] bg-cover bg-fixed h-100 relative"
                id="top"
            >
                <NavBar />
                <Intro />
                <div class="overscroll-contain flex-col">
                    <div class="flex justify-start" id="about">
                        <About />
                    </div>
                    <div class="flex justify-end" id="experience">
                        <Experience />
                    </div>
                    <div class="flex justify-start" id="projects">
                        <Projects />
                    </div>
                    <div class="flex justify-end" id="contacts">
                        <Contacts />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
