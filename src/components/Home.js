import AboutMe from "../home-components/AboutMe"
import Contact from "../home-components/Contact"
import FullStack from "../home-components/FullStack"
import MainHomePage from "../home-components/MainHomePage";
import Resume from "../home-components/Resume";

import "../css/Home.css";

const Home = () => {
    return (
        <div className="home_main">
            <section>
                <MainHomePage />
            </section>
            <section>
                <AboutMe />
            </section>
            <section>
                <FullStack />
            </section>
            <section className="home_resume">
                <div class="custom-shape-divider-top-1652143765">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <Resume />
                <div class="custom-shape-divider-bottom-1652144077">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <section>
                <Contact />
            </section>
        </div>
    )
};

export default Home;