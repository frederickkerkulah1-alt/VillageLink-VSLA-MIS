function Monitoring() {
  return (
    <div>

      <h1>Field Officer Monitoring Visit</h1>

      <p>
        Conduct field monitoring and verify VSLA group performance.
      </p>

      <hr />

      <h2>Visit Information</h2>

      <form className="monitoring-form">

        <select>
          <option>Select Organization</option>
          <option>Mission Alliance Liberia</option>
        </select>

        <select>
          <option>Select Project</option>
          <option>Adult Literacy & VSLA</option>
        </select>

        <select>
          <option>Select County</option>
          <option>Bong County</option>
        </select>

        <select>
          <option>Select District</option>
          <option>Zota District</option>
        </select>

        <select>
          <option>Select Community</option>
          <option>Garmu</option>
        </select>

        <select>
          <option>Select VSLA Group</option>
          <option>Garmu VSLA</option>
        </select>

        <input
          type="date"
        />

        <input
          type="text"
          placeholder="Field Officer Name"
        />

        <hr />

        <h2>Weekly Report Verification</h2>

        <select>
          <option>Weekly Report Verified?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <select>
          <option>Meeting Conducted?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <select>
          <option>Attendance Register Available?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <select>
          <option>Financial Records Updated?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <hr />

        <h2>Group Performance</h2>

        <input
          type="number"
          placeholder="Performance Score (%)"
        />

        <textarea
          rows="3"
          placeholder="Strengths Observed"
        ></textarea>

        <textarea
          rows="3"
          placeholder="Challenges Identified"
        ></textarea>

        <textarea
          rows="3"
          placeholder="Recommendations"
        ></textarea>

        <textarea
          rows="3"
          placeholder="Follow-up Actions"
        ></textarea>

        <button type="submit">
          Submit Monitoring Report
        </button>

      </form>

      <hr />

      <h2>Monitoring History</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Date</th>
            <th>Group</th>
            <th>Officer</th>
            <th>Score</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>15-Jul-2026</td>
            <td>Garmu VSLA</td>
            <td>John Doe</td>
            <td>92%</td>
            <td>Completed</td>
            <td>View</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Monitoring;