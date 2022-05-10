import "../css/Resume.css";
const Resume = () => {
    return (
        <div className="resume_main">
            <div className="resume_scan-me">
                <img src={require("../images/qrcode.webp")} />
                <h3>Scan Me</h3>
            </div>
            <div className="resume_click-me">
                <span>Click</span>
                <span>Me</span>
            </div>
        </div>
    )
};

export default Resume;