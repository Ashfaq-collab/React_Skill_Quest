import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
        >
          ⚔️ SkillQuest
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;