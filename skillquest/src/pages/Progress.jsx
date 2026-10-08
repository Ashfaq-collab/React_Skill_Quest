import { useSelector } from "react-redux";

function Progress() {
  const progressHistory = useSelector(
    (state) => state.quests.progressHistory
  );

  return (
    <div className="container py-5">
      <section className="mb-5">
        <h1 className="fw-bold">Progress 📈</h1>
        <p className="text-muted">
          Track your learning progress and XP earned each day.
        </p>
      </section>

      <section>
        <h2 className="fw-bold mb-3">
          XP History
        </h2>

        {progressHistory.length > 0 ? (
          <div className="row g-3">
            {progressHistory.map((entry) => (
              <div
                className="col-md-6 col-lg-4"
                key={entry.date}
              >
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="fw-bold">
                      {entry.date}
                    </h5>

                    <p className="mb-0">
                      ⭐ {entry.xp} XP earned
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-info">
            No progress recorded yet.
          </div>
        )}
      </section>
    </div>
  );
}

export default Progress;