import "../css/AboutMe.css";
const AboutMe = () => {
    return (
        <div className="about-me_main">
            <img 
                src={require("../images/pink-rose.jpg")}
                className="about-me_left"
            />
            <div 
                className="about-me_content about-me_right"
            >
                <h1>
                    About Me
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br /> 
                    Aenean porta augue vestibulum purus fermentum, a ultrices libero pharetra. 
                    <br /> 
                    Ut vel elementum est, luctus ultrices nisi. 
                    <br /> 
                    Etiam blandit velit lacus, feugiat dapibus turpis aliquet sit amet. 
                    <br /> 
                    In hac habitasse platea dictumst. Quisque feugiat maximus aliquam. 
                </p>
            </div>
        </div>
    )
};

export default AboutMe;