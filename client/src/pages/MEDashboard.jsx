function MEDashboard() {
  return (
    <div>

      <h1>Monitoring & Evaluation Dashboard</h1>

      <p>Monitor project indicators, data quality and reporting performance.</p>

      <hr />

      <table border="1" cellPadding="10">
        <tbody>
          <tr><td><b>Total Reports Received</b></td><td>1,245</td></tr>
          <tr><td><b>Missing Reports</b></td><td>14</td></tr>
          <tr><td><b>Late Reports</b></td><td>6</td></tr>
          <tr><td><b>Data Quality Score</b></td><td>98%</td></tr>
          <tr><td><b>KPIs Achieved</b></td><td>91%</td></tr>
        </tbody>
      </table>

      <hr />

      <button>Indicator Report</button>
      <button>Data Validation</button>
      <button>Performance Charts</button>
      <button>GIS Dashboard</button>

    </div>
  );
}

export default MEDashboard;