function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          ⚔️ SkillQuest
        </a>

        <div className="d-flex gap-3">
          <a className="nav-link text-white" href="/">
            Dashboard
          </a>

          <a className="nav-link text-white" href="/quests">
            Quests
          </a>

          <a className="nav-link text-white" href="/challenges">
            Challenges
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;