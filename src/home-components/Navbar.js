import { useNavigate } from "react-router";

import "../css/Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar_buttons">
            <ul>
                <button>
                    About Me
                </button>
                <button>
                    Full Stack
                </button>
                <button>
                    Resume
                </button>
                <button>
                    Contact
                </button>
                <button
                    onClick={() => {
                        navigate("/projects")
                    }}
                >
                    Projects
                </button>
                <button
                    onClick={() => {
                        navigate("/special-thanks")
                    }}
                >
                    Recognition
                </button>
            </ul>
        </div>
    )
};

export default Navbar;