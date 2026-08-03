function Groups() {
  return (
    <div>

      <h1>VSLA Group Management</h1>

      <p>
        Register and manage VSLA groups across all projects.
      </p>

      <hr />

      <h2>Register New VSLA Group</h2>

      <form className="group-form">

        <select>
          <option>Select Organization</option>
          <option>Mission Alliance Liberia</option>
        </select>

        <select>
          <option>Select Project</option>
          <option>Adult Literacy & VSLA</option>
        </select>

        <select>
          <option>Select Country</option>
          <option>Liberia</option>
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
          <option>Select Clan</option>
          <option>Gwolapolu Clan</option>
        </select>

        <select>
          <option>Select Community</option>
          <option>Garmu</option>
        </select>

        <input
          type="text"
          placeholder="Group Name"
        />

        <input
          type="text"
          placeholder="Group Code"
        />

        <select>
          <option>Group Type</option>
          <option>Women</option>
          <option>Men</option>
          <option>Mixed</option>
          <option>Youth</option>
        </select>

        <input
          type="number"
          placeholder="Cycle Number"
        />

        <input
          type="date"
        />

        <select>
          <option>Meeting Day</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>

        <input
          type="month"
        />

        <input
          type="number"
          placeholder="Expected Members"
        />

        <input
          type="text"
          placeholder="Saving Agent"
        />

        <input
          type="text"
          placeholder="Field Officer"
        />

        <textarea
          rows="3"
          placeholder="Remarks"
        ></textarea>

        <button type="submit">
          Save Group
        </button>

      </form>

      <hr />

      <h2>Registered VSLA Groups</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Code</th>
            <th>Group</th>
            <th>Community</th>
            <th>District</th>
            <th>Cycle</th>
            <th>Members</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>GRP001</td>
            <td>Garmu VSLA</td>
            <td>Garmu</td>
            <td>Zota District</td>
            <td>3</td>
            <td>30</td>
            <td>Active</td>
            <td>Edit | View</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Groups;