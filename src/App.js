import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SpecialThanks from "./components/SpecialThanks";

import "./css/App.css";

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <Projects />
                    }
                />
                <Route
                    path="special-thanks"
                    element={
                        <SpecialThanks />
                    }
                />
            </Routes>
            <Footer />
        </>
    )
};

export default App;