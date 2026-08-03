function SavingAgentDashboard() {
  return (
    <div>

      <h1>Saving Agent Dashboard</h1>

      <p>
        Welcome to the VillageLink Saving Agent Dashboard.
      </p>

      <hr />

      <h2>Profile Information</h2>

      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            <td><b>Saving Agent</b></td>
            <td>John Doe</td>
          </tr>

          <tr>
            <td><b>Employee ID</b></td>
            <td>SA001</td>
          </tr>

          <tr>
            <td><b>Project</b></td>
            <td>Adult Literacy & VSLA</td>
          </tr>

          <tr>
            <td><b>District</b></td>
            <td>Panta District</td>
          </tr>

          <tr>
            <td><b>Communities</b></td>
            <td>12</td>
          </tr>

          <tr>
            <td><b>Groups Assigned</b></td>
            <td>28</td>
          </tr>

          <tr>
            <td><b>Total Members</b></td>
            <td>734</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Today's Activities</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Meetings Scheduled</td>
            <td>4</td>
          </tr>

          <tr>
            <td>Meetings Completed</td>
            <td>2</td>
          </tr>

          <tr>
            <td>Pending Meetings</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Weekly Performance</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Indicator</th>
            <th>Value</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Total Savings</td>
            <td>$12,450</td>
          </tr>

          <tr>
            <td>Social Fund</td>
            <td>$2,340</td>
          </tr>

          <tr>
            <td>Loans Issued</td>
            <td>$4,800</td>
          </tr>

          <tr>
            <td>Loans Repaid</td>
            <td>$3,750</td>
          </tr>

          <tr>
            <td>Fines Collected</td>
            <td>$275</td>
          </tr>

        </tbody>

      </table>

      <hr />

      <h2>Quick Actions</h2>

      <button>Weekly Meeting</button>

      <button>Register Member</button>

      <button>Cash Count</button>

      <button>Monitoring</button>

      <button>Savings</button>

      <button>Loans</button>

      <hr />

      <h2>Alerts</h2>

      <ul>

        <li>3 Groups have overdue loans.</li>

        <li>2 Groups missed weekly meetings.</li>

        <li>1 Cash Count pending.</li>

      </ul>

      <hr />

      <h2>Recent Activities</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>

            <th>Date</th>

            <th>Group</th>

            <th>Activity</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>10 July 2026</td>

            <td>Garmu Women VSLA</td>

            <td>Weekly Meeting</td>

            <td>Completed</td>

          </tr>

          <tr>

            <td>09 July 2026</td>

            <td>Koryah VSLA</td>

            <td>Cash Count</td>

            <td>Completed</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default SavingAgentDashboard;