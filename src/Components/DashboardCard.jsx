import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="dashboard-card">
      <h2>{value}</h2>

      <p>{title}</p>
    </div>
  );
};

export default DashboardCard;