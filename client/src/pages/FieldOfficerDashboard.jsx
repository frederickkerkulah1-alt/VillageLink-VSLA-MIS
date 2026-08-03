function FieldOfficerDashboard() {
  return (
    <div>

      <h1>Field Officer Dashboard</h1>

      <p>
        Monitor Saving Agents, verify field data, supervise VSLA groups, and review cash counting activities.
      </p>

      <hr />

      <h2>Field Officer Profile</h2>

      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            <td><b>Name</b></td>
            <td>Field Officer Name</td>
          </tr>

          <tr>
            <td><b>Employee ID</b></td>
            <td>FO001</td>
          </tr>

          <tr>
            <td><b>Project</b></td>
            <td>Adult Literacy & VSLA</td>
          </tr>

          <tr>
            <td><b>District Assigned</b></td>
            <td>Panta District</td>
          </tr>

          <tr>
            <td><b>Communities</b></td>
            <td>25</td>
          </tr>

          <tr>
            <td><b>Saving Agents Supervised</b></td>
            <td>8</td>
          </tr>

          <tr>
            <td><b>VSLA Groups</b></td>
            <td>64</td>
          </tr>

        </tbody>
      </table>

      <hr />

      <h2>Performance Summary</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Indicator</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Meetings Conducted</td>
            <td>58</td>
          </tr>

          <tr>
            <td>Cash Counts Completed</td>
            <td>16</td>
          </tr>

          <tr>
            <td>Monitoring Visits</td>
            <td>23</td>
          </tr>

          <tr>
            <td>Groups Performing Well</td>
            <td>54</td>
          </tr>

          <tr>
            <td>Groups Requiring Follow-up</td>
            <td>10</td>
          </tr>

        </tbody>

      </table>

      <hr />

      <h2>Saving Agent Performance</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>

            <th>Saving Agent</th>

            <th>Groups</th>

            <th>Meetings</th>

            <th>Cash Count</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>John Doe</td>

            <td>12</td>

            <td>Completed</td>

            <td>Completed</td>

            <td>Excellent</td>

          </tr>

          <tr>

            <td>Mary Johnson</td>

            <td>10</td>

            <td>Pending</td>

            <td>Completed</td>

            <td>Needs Follow-up</td>

          </tr>

        </tbody>

      </table>

      <hr />

      <h2>Cash Count Summary</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Indicator</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Cash Counts Completed</td>
            <td>16</td>
          </tr>

          <tr>
            <td>Cash Counts Pending</td>
            <td>4</td>
          </tr>

          <tr>
            <td>Discrepancies Found</td>
            <td>1</td>
          </tr>

        </tbody>

      </table>

      <hr />

      <h2>Alerts</h2>

      <ul>

        <li>4 Saving Agents have not submitted weekly reports.</li>

        <li>2 groups require immediate cash verification.</li>

        <li>5 monitoring visits are overdue.</li>

      </ul>

      <hr />

      <h2>Quick Actions</h2>

      <button>Review Meetings</button>

      <button>Cash Count</button>

      <button>Monitoring</button>

      <button>Approve Reports</button>

      <button>View Saving Agents</button>

      <button>Performance Report</button>

    </div>
  );
}

export default FieldOfficerDashboard;