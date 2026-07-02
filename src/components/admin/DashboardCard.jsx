const DashboardCard = ({
  title,
  value,
  icon,
  color,
}) => {

  return (

    <div
      className="dashboard-card"
      style={{
        borderLeft: `5px solid ${color}`,
      }}
    >

      <div className="dashboard-card-content">

        <h4>{title}</h4>

        <h2>{value}</h2>

      </div>

      <div
        className="dashboard-card-icon"
        style={{ color }}
      >

        {icon}

      </div>

    </div>

  );

};

export default DashboardCard;