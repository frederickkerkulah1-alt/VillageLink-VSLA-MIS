function Dashboard() {
  return (
    <div>

      <h1>VillageLink Administrator Dashboard</h1>

      <p>
        Enterprise dashboard for managing all organizations, projects,
        users and overall VSLA performance.
      </p>

      <hr />

      {/* ================= FILTER SECTION ================= */}

      <h2>Dashboard Filters</h2>

      <div className="stats-grid">

        <select>
          <option>All Organizations</option>
        </select>

        <select>
          <option>All Projects</option>
        </select>

        <select>
          <option>All Countries</option>
        </select>

        <select>
          <option>All Counties</option>
        </select>

        <select>
          <option>All Districts</option>
        </select>

        <select>
          <option>Reporting Period</option>
        </select>

      </div>

      <hr />

      {/* ================= PLATFORM OVERVIEW ================= */}

      <h2>Platform Overview</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Organizations</h3>
          <h2>12</h2>
        </div>

        <div className="stat-card">
          <h3>Projects</h3>
          <h2>34</h2>
        </div>

        <div className="stat-card">
          <h3>Countries</h3>
          <h2>6</h2>
        </div>

        <div className="stat-card">
          <h3>Counties</h3>
          <h2>72</h2>
        </div>

        <div className="stat-card">
          <h3>Districts</h3>
          <h2>185</h2>
        </div>

        <div className="stat-card">
          <h3>Communities</h3>
          <h2>1,240</h2>
        </div>

      </div>

      <hr />

      {/* ================= USER MANAGEMENT ================= */}

      <h2>User Management</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Users</h3>
          <h2>315</h2>
        </div>

        <div className="stat-card">
          <h3>Online Users</h3>
          <h2>42</h2>
        </div>

        <div className="stat-card">
          <h3>System Administrators</h3>
          <h2>3</h2>
        </div>

        <div className="stat-card">
          <h3>Organization Admins</h3>
          <h2>15</h2>
        </div>

        <div className="stat-card">
          <h3>Project Managers</h3>
          <h2>28</h2>
        </div>

        <div className="stat-card">
          <h3>Saving Agents</h3>
          <h2>140</h2>
        </div>

      </div>

      <hr />

      {/* ================= VSLA PERFORMANCE ================= */}

      <h2>VSLA Performance</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Groups</h3>
          <h2>865</h2>
        </div>

        <div className="stat-card">
          <h3>Total Members</h3>
          <h2>24,580</h2>
        </div>

        <div className="stat-card">
          <h3>Female Members</h3>
          <h2>71%</h2>
        </div>

        <div className="stat-card">
          <h3>Active Groups</h3>
          <h2>842</h2>
        </div>

        <div className="stat-card">
          <h3>Weekly Reporting Rate</h3>
          <h2>96%</h2>
        </div>

        <div className="stat-card">
          <h3>Cash Count Completion</h3>
          <h2>92%</h2>
        </div>

      </div>

      <hr />

      {/* ================= FINANCIAL OVERVIEW ================= */}

      <h2>Financial Overview</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Savings</h3>
          <h2>LRD 48.6M</h2>
        </div>

        <div className="stat-card">
          <h3>Total Loans</h3>
          <h2>LRD 22.1M</h2>
        </div>

        <div className="stat-card">
          <h3>Social Fund</h3>
          <h2>LRD 3.8M</h2>
        </div>

        <div className="stat-card">
          <h3>Loan Portfolio at Risk</h3>
          <h2>2.4%</h2>
        </div>

        <div className="stat-card">
          <h3>Average Savings / Member</h3>
          <h2>LRD 1,978</h2>
        </div>

        <div className="stat-card">
          <h3>Share-Out Value</h3>
          <h2>LRD 56.2M</h2>
        </div>

      </div>

      <hr />

      {/* ================= PERFORMANCE CHARTS ================= */}

      <h2>Performance Charts</h2>

      <div className="chart-box">

        Savings Growth Chart

        <br /><br />

        Loan Portfolio Chart

        <br /><br />

        Member Growth Chart

        <br /><br />

        Reporting Trend Chart

      </div>

      <hr />

      {/* ================= RECENT ACTIVITIES ================= */}

      <h2>Recent Activities</h2>

      <div className="recent-box">

        <ul>

          <li>✅ New Organization Registered</li>

          <li>✅ New Project Created</li>

          <li>✅ New Country Added</li>

          <li>✅ Weekly Reports Submitted</li>

          <li>✅ Quarterly Cash Count Completed</li>

          <li>✅ New Users Registered</li>

        </ul>

      </div>

      <hr />

      {/* ================= ALERTS ================= */}

      <h2>Platform Alerts</h2>

      <div className="recent-box">

        <ul>

          <li>⚠ 12 Groups have overdue weekly reports.</li>

          <li>⚠ 5 Projects have overdue quarterly reports.</li>

          <li>⚠ 8 Cash Counts are pending.</li>

          <li>⚠ 3 User accounts are inactive.</li>

        </ul>

      </div>

      <hr />

      {/* ================= QUICK ACTIONS ================= */}

      <h2>Quick Actions</h2>

      <div className="quick-actions">

        <button>Register Organization</button>

        <button>Register Country</button>

        <button>Register Project</button>

        <button>Register User</button>

        <button>View Reports</button>

        <button>System Settings</button>

      </div>

    </div>
  );
}

export default Dashboard;