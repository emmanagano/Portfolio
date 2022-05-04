import Navbar from "./Navbar";

import "../css/MainHomePage.css";

const MainHomePage = () => {
    return (
        <div
            className="main-home-page"
        >
            <div
                className="emma-animation
                light-moss-green"
            >
                <div
                    className="
                    emma-animation-child 
                    light-moss-green"
                >
                    <span className="header-font">
                        <h1>EM</h1>
                        <h1>MA</h1>
                    </span>
                </div>
            </div>
            <div className="main-home-page_content">
                <Navbar />
            </div>
        </div>
    )
};

export default MainHomePage;