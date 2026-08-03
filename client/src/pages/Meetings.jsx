function Meetings() {
  return (
    <div>

      <h1>Weekly Meeting Data Collection</h1>

      <p>
        Weekly VSLA meeting summary submitted by the Saving Agent.
      </p>

      <hr />

      <h2>Meeting Information</h2>

      <form className="meeting-form">

        <select>
          <option>Select Organization</option>
          <option>Mission Alliance Liberia</option>
        </select>

        <select>
          <option>Select Project</option>
          <option>Adult Literacy & VSLA</option>
        </select>

        <select>
          <option>Select Group</option>
          <option>Garmu VSLA</option>
        </select>

        <input
          type="text"
          placeholder="Group Number"
        />

        <input
          type="date"
        />

        <hr />

        <h2>Membership Summary</h2>

        <input
          type="number"
          placeholder="Total Registered Members"
        />

        <input
          type="number"
          placeholder="Total Active Members"
        />

        <input
          type="number"
          placeholder="Drop-outs This Cycle"
        />

        <input
          type="number"
          placeholder="Members Attending This Meeting"
        />

        <hr />

        <h2>Financial Summary</h2>

        <input
          type="number"
          placeholder="Total Savings This Meeting"
        />

        <input
          type="number"
          placeholder="Total Social Fund This Meeting"
        />

        <input
          type="number"
          placeholder="Total Fines This Meeting"
        />

        <input
          type="number"
          placeholder="Total Loans Repaid (In)"
        />

        <input
          type="number"
          placeholder="Total Loans Disbursed (Out)"
        />

        <hr />

        <h2>Meeting Notes</h2>

        <textarea
          rows="3"
          placeholder="Protocol Observed"
        ></textarea>

        <textarea
          rows="3"
          placeholder="Challenges"
        ></textarea>

        <textarea
          rows="3"
          placeholder="Remarks"
        ></textarea>

        <textarea
          rows="3"
          placeholder="Follow-up Action"
        ></textarea>

        <button type="submit">
          Submit Weekly Meeting Report
        </button>

      </form>

      <hr />

      <h2>Submitted Weekly Reports</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Date</th>
            <th>Group</th>
            <th>Members Present</th>
            <th>Savings</th>
            <th>Loans Out</th>
            <th>Loans In</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>12-Jul-2026</td>
            <td>Garmu VSLA</td>
            <td>28</td>
            <td>LRD 12,500</td>
            <td>LRD 5,000</td>
            <td>LRD 3,500</td>
            <td>Submitted</td>
            <td>View</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Meetings;