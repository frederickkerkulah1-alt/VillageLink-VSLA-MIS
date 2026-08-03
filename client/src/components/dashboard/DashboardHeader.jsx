function DashboardHeader() {
  const today = new Date();

  return (
    <div className="dashboard-header">
      <div>
        <h1>VillageLink VSLA MIS</h1>
        <p>Dashboard Overview</p>
      </div>

      <div className="header-right">
        <span>🔔 Notifications</span>
        <span>👤 Frederick</span>
        <span>{today.toDateString()}</span>
      </div>
    </div>
  );
}

export default DashboardHeader;
