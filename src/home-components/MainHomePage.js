import Navbar from "./Navbar";

import "../css/MainHomePage.css";

const MainHomePage = () => {
    return (
        <div
            className="main-home-page"
        >
            <div className="main-home-page_content">
                <Navbar />
            </div>
            <div
                className="emma-animation"
            >
                <div className="home-page_introduction
                    left"
                >
                    <p>
                        I have been waiting for this day.
                        <br /> 
                        For when I could show you the in-depth of my talent. 
                        <br /> 
                        I find harmony in web <span>design</span> and <span>development</span>.
                        <br />  
                        For you and for me, together, 
                        <br /> 
                        let’s create an endearing 
                        website that will leave everyone’s eyes in glister. 
                    </p>
                </div>
                <div
                    className="emma-animation-child
                    right"
                >
                    <span className="header-font">
                        <h1>EM</h1>
                        <h1>MA</h1>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default MainHomePage;