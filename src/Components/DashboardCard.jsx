const DashboardCard = ({ title, value }) => {
  return (
    <article className="dashboard-card">
      <p>{title}</p>
      <h2>{value}</h2>
    </article>
  );
};

export default DashboardCard;
