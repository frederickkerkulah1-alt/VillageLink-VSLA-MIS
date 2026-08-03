function Members() {
  return (
    <div>

      <h1>VSLA Member Management</h1>

      <p>
        Register and manage VSLA group members.
      </p>

      <hr />

      <h2>Register New Member</h2>

      <form className="member-form">

        <input
          type="text"
          placeholder="Member ID"
        />

        <input
          type="text"
          placeholder="Full Name"
        />

        <select>
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          type="date"
        />

        <input
          type="text"
          placeholder="Phone Number"
        />

        <input
          type="text"
          placeholder="National ID (Optional)"
        />

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
          type="date"
        />

        <input
          type="text"
          placeholder="Occupation"
        />

        <input
          type="text"
          placeholder="Primary Livelihood"
        />

        <input
          type="text"
          placeholder="Business Type"
        />

        <select>
          <option>Disability Status</option>
          <option>No</option>
          <option>Yes</option>
        </select>

        <input
          type="text"
          placeholder="Next of Kin"
        />

        <input
          type="text"
          placeholder="Next of Kin Phone"
        />

        <input
          type="file"
        />

        <select>
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">
          Save Member
        </button>

      </form>

      <hr />

      <h2>Registered Members</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Group</th>
            <th>Phone</th>
            <th>Occupation</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>MBR001</td>
            <td>Mary Doe</td>
            <td>Female</td>
            <td>Garmu VSLA</td>
            <td>0770000000</td>
            <td>Farmer</td>
            <td>Active</td>
            <td>Edit | View</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Members;