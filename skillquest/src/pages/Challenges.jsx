import { useState } from "react";
import challenges from "../data/challenges";
import { getDailyChallenge } from "../utils/helpers";

function Challenges() {
  const [completed, setCompleted] = useState(false);

  const challenge = getDailyChallenge(challenges);

  function handleComplete() {
    setCompleted(true);
  }

  return (
    <div className="container py-5">
      <section className="mb-5">
        <h1 className="fw-bold">
          Daily Challenge 🎯
        </h1>

        <p className="text-muted">
          Complete today's challenge and earn bonus XP.
        </p>
      </section>

      <div className="card shadow-sm">
        <div className="card-body">
          <span className="badge text-bg-primary mb-3">
            {challenge.category}
          </span>

          <h2 className="fw-bold">
            {challenge.title}
          </h2>

          <p className="text-muted">
            {challenge.description}
          </p>

          <p className="fw-bold">
            ⭐ {challenge.xp} XP
          </p>

          {completed ? (
            <div className="alert alert-success">
              🎉 Challenge completed!
            </div>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleComplete}
            >
              Complete Challenge
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Challenges;