import {AiOutlineHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import {FaReact} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {SiPostgresql} from "react-icons/si";
import {DiHeroku} from "react-icons/di"

import "../css/FullStack.css";

const FullStack = () => {
    return (
        <div className="full-stack_main">
            <div className="full-stack_icons">
                <AiOutlineHtml5 />
                <DiCss3 />
                <FaReact />
                <FaNodeJs />
                <SiPostgresql />
                <DiHeroku />
            </div>
            <h1>PERN Stack</h1>
            <div className="full-stack_pern">
                <span>
                    <h4>Database</h4>
                    <p>Postgres</p>
                    <p>Email.js</p>
                </span>
                <span>
                    <h4>Server</h4>
                    <p>Node.js</p>
                    <p>Express.js</p>
                </span>
                <span>
                    <h4>Front-End</h4>
                    <p>React</p>
                    <p>JSX & CSS3</p>
                </span>
                <span>
                    <h4>Deployment</h4>
                    <p>Heroku</p>
                    <p>Netlify</p>
                </span>
            </div>
        </div>
    )
};

export default FullStack;