function ProjectManagerDashboard() {
  return (
    <div>

      <h1>Project Manager Dashboard</h1>

      <p>Monitor project implementation, financial performance and staff productivity.</p>

      <hr />

      <table border="1" cellPadding="10">
        <tbody>
          <tr><td><b>Projects</b></td><td>6</td></tr>
          <tr><td><b>Programs</b></td><td>12</td></tr>
          <tr><td><b>Field Officers</b></td><td>32</td></tr>
          <tr><td><b>Saving Agents</b></td><td>84</td></tr>
          <tr><td><b>VSLA Groups</b></td><td>685</td></tr>
          <tr><td><b>Members</b></td><td>18,950</td></tr>
        </tbody>
      </table>

      <hr />

      <button>Project Reports</button>
      <button>Financial Summary</button>
      <button>Risk Analysis</button>
      <button>Performance Dashboard</button>

    </div>
  );
}

export default ProjectManagerDashboard;