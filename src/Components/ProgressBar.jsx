const ProgressBar = ({ progress }) => {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <section className="progress-card">
      <div className="progress-heading">
        <div>
          <h2>Enrollment progress</h2>
          <p>Your enrolled courses compared with the available courses.</p>
        </div>
        <strong>{safeProgress}%</strong>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Enrollment progress"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={safeProgress}
      >
        <div className="progress-fill" style={{ width: `${safeProgress}%` }}></div>
      </div>
    </section>
  );
};

export default ProgressBar;
