function StatCard({ title, value, icon }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body text-center">
        <div className="fs-2">{icon}</div>

        <h3 className="fw-bold mt-2">
          {value}
        </h3>

        <p className="text-muted mb-0">
          {title}
        </p>
      </div>
    </div>
  );
}

export default StatCard;