import React from "react";
import {useDarkMode} from "../hooks/useDarkMode";

const Nav = () => {
    const [darkMode, setDarkMOde] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMOde(!darkMode);
    };

    return (
        <div>
            <h3>Soccer!</h3>
            <button>Dark Mode</button>
        </div>
    );
}

export default Nav;