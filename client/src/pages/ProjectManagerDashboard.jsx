function ProjectManagerDashboard() {
  return (
    <div>

      <h1>Project Manager Dashboard</h1>

      <p>
        Monitor project implementation, financial performance, field activities and reporting.
      </p>

      <hr />

      <h2>Project Information</h2>

      <table border="1" cellPadding="10">

        <tbody>

          <tr>
            <td><strong>Project</strong></td>
            <td>Adult Literacy & VSLA Project</td>
          </tr>

          <tr>
            <td><strong>Organization</strong></td>
            <td>Mission Alliance Liberia</td>
          </tr>

          <tr>
            <td><strong>Country</strong></td>
            <td>Liberia</td>
          </tr>

          <tr>
            <td><strong>Project Manager</strong></td>
            <td>Project Manager Name</td>
          </tr>

          <tr>
            <td><strong>Project Status</strong></td>
            <td>Active</td>
          </tr>

        </tbody>

      </table>

      <hr />

      <h2>Project KPIs</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Counties</h3>
          <h2>4</h2>
        </div>

        <div className="stat-card">
          <h3>Districts</h3>
          <h2>12</h2>
        </div>

        <div className="stat-card">
          <h3>Communities</h3>
          <h2>66</h2>
        </div>

        <div className="stat-card">
          <h3>VSLA Groups</h3>
          <h2>220</h2>
        </div>

        <div className="stat-card">
          <h3>Members</h3>
          <h2>6,850</h2>
        </div>

        <div className="stat-card">
          <h3>Female Members</h3>
          <h2>74%</h2>
        </div>

      </div>

      <hr />

      <h2>Financial Summary</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Savings</h3>
          <h2>LRD 11.5M</h2>
        </div>

        <div className="stat-card">
          <h3>Total Loans</h3>
          <h2>LRD 5.8M</h2>
        </div>

        <div className="stat-card">
          <h3>Social Fund</h3>
          <h2>LRD 890K</h2>
        </div>

        <div className="stat-card">
          <h3>Portfolio at Risk</h3>
          <h2>1.9%</h2>
        </div>

      </div>

      <hr />

      <h2>Implementation Progress</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>

            <th>Indicator</th>
            <th>Target</th>
            <th>Achieved</th>
            <th>Progress</th>

          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Groups Formed</td>
            <td>220</td>
            <td>215</td>
            <td>98%</td>
          </tr>

          <tr>
            <td>Members Registered</td>
            <td>7,000</td>
            <td>6,850</td>
            <td>98%</td>
          </tr>

          <tr>
            <td>Weekly Reports</td>
            <td>100%</td>
            <td>97%</td>
            <td>97%</td>
          </tr>

          <tr>
            <td>Cash Counts</td>
            <td>100%</td>
            <td>94%</td>
            <td>94%</td>
          </tr>

        </tbody>

      </table>

      <hr />

      <h2>Project Charts</h2>

      <div className="chart-box">

        Savings Trend

        <br /><br />

        Loan Trend

        <br /><br />

        Membership Growth

        <br /><br />

        Quarterly Performance

      </div>

      <hr />

      <h2>Recent Activities</h2>

      <ul>

        <li>✅ Weekly reports submitted.</li>

        <li>✅ Quarterly cash count completed.</li>

        <li>✅ New VSLA groups registered.</li>

        <li>✅ New members enrolled.</li>

      </ul>

      <hr />

      <h2>Project Alerts</h2>

      <ul>

        <li>⚠ Five groups have overdue monitoring visits.</li>

        <li>⚠ Two cash counts remain outstanding.</li>

        <li>⚠ One district has reporting below target.</li>

      </ul>

    </div>
  );
}

export default ProjectManagerDashboard;