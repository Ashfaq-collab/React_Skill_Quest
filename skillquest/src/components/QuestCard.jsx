function QuestCard({ quest, onComplete }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <span className="badge bg-primary mb-2">
              {quest.category}
            </span>

            <h5 className="card-title">
              {quest.title}
            </h5>

            <p className="card-text text-muted">
              {quest.description}
            </p>
          </div>

          <span className="badge bg-warning text-dark">
            +{quest.xp} XP
          </span>
        </div>

        {quest.completed ? (
          <button className="btn btn-success w-100" disabled>
            ✓ Completed
          </button>
        ) : (
          <button className="btn btn-primary w-100"
                onClick={()=> onComplete(quest.id)}>
            Complete Quest
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestCard;