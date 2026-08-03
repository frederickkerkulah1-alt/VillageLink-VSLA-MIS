function Leadership() {
  return (
    <div>

      <h1>VSLA Group Leadership</h1>

      <p>
        Assign and manage leadership positions for each VSLA group.
      </p>

      <hr />

      <h2>Assign Leadership</h2>

      <form className="leadership-form">

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

        <select>
          <option>Select Member</option>
        </select>

        <select>
          <option>Select Position</option>
          <option>Chairperson</option>
          <option>Secretary</option>
          <option>Treasurer</option>
          <option>Money Counter 1</option>
          <option>Money Counter 2</option>
          <option>Money Counter 3</option>
          <option>Key Holder 1</option>
          <option>Key Holder 2</option>
          <option>Key Holder 3</option>
          <option>Discipline Chair</option>
          <option>Welfare Chair</option>
        </select>

        <input
          type="date"
          placeholder="Start Date"
        />

        <input
          type="date"
          placeholder="End Date"
        />

        <select>
          <option>Status</option>
          <option>Active</option>
          <option>Completed</option>
        </select>

        <button type="submit">
          Assign Position
        </button>

      </form>

      <hr />

      <h2>Current Leadership</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Group</th>
            <th>Member</th>
            <th>Position</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Garmu VSLA</td>
            <td>Mary Doe</td>
            <td>Chairperson</td>
            <td>01-Jan-2026</td>
            <td>31-Dec-2026</td>
            <td>Active</td>
            <td>Edit | Remove</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Leadership;