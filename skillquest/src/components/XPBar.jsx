function XPBar({ currentXP, requiredXP }) {
  const percentage = (currentXP / requiredXP) * 100;

  return (
    <div>
      <div className="d-flex justify-content-between mb-2">
        <span className="fw-semibold">
          Level Progress
        </span>

        <span className="text-muted">
          {currentXP} / {requiredXP} XP
        </span>
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        >
          {Math.round(percentage)}%
        </div>
      </div>
    </div>
  );
}

export default XPBar;