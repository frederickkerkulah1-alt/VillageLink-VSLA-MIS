function OrganizationDashboard() {
  return (
    <div>

      <h1>Organization Dashboard</h1>

      <p>Monitor all projects implemented under your organization.</p>

      <hr />

      <table border="1" cellPadding="10">
        <tbody>
          <tr><td><b>Organization</b></td><td>Mission Alliance Liberia</td></tr>
          <tr><td><b>Countries</b></td><td>2</td></tr>
          <tr><td><b>Projects</b></td><td>9</td></tr>
          <tr><td><b>Programs</b></td><td>22</td></tr>
          <tr><td><b>VSLA Groups</b></td><td>1,250</td></tr>
          <tr><td><b>Total Members</b></td><td>34,560</td></tr>
        </tbody>
      </table>

      <hr />

      <button>Organization Reports</button>
      <button>Financial Dashboard</button>
      <button>Performance Overview</button>

    </div>
  );
}

export default OrganizationDashboard;