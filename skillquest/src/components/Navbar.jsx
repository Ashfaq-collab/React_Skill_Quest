import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <NavLink
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    ⚔️  {import.meta.env.VITE_APP_NAME || "SkillQuest"}
                </NavLink>

                <div className="d-flex gap-3">
                    <NavLink
                        className="nav-link text-white"
                        to="/"
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        className="nav-link text-white"
                        to="/quests"
                    >
                        Quests
                    </NavLink>

                    <NavLink
                        className="nav-link text-white"
                        to="/challenges"
                    >
                        Challenges
                    </NavLink>

                    <NavLink
                        className="nav-link text-white"
                        to="/progress"
                    >
                        Progress
                    </NavLink>
                    <button
                        className="btn btn-outline-light"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;