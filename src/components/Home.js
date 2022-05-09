import AboutMe from "../home-components/AboutMe"
import Contact from "../home-components/Contact"
import FullStack from "../home-components/FullStack"
import MainHomePage from "../home-components/MainHomePage";
import Resume from "../home-components/Resume"

const Home = () => {
    return (
        <div>
            <section>
                <MainHomePage />
            </section>
            <section>
                <AboutMe />
            </section>
            <section>
                <FullStack />
            </section>
            <section>
                <Resume />
            </section>
            <section>
                <Contact />
            </section>
        </div>
    )
};

export default Home;