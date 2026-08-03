function Users() {
  return (
    <div>

      <h1>Organization User Management</h1>

      <p>
        Register and manage users within an organization.
      </p>

      <hr />

      <h2>Register New User</h2>

      <form className="user-form">

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="text"
          placeholder="Employee ID"
        />

        <input
          type="text"
          placeholder="Phone Number"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="text"
          placeholder="Username"
        />

        <input
          type="password"
          placeholder="Temporary Password"
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
          <option>Select Role</option>
          <option>Saving Agent</option>
          <option>Field Officer</option>
          <option>Program Officer</option>
          <option>Monitoring & Evaluation Officer</option>
          <option>Project Manager</option>
          <option>Organization Administrator</option>
        </select>

        <select>
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">
          Save User
        </button>

      </form>

      <hr />

      <h2>Registered Users</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Organization</th>
            <th>Project</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>USR001</td>
            <td>Frederick Kerkulah</td>
            <td>Mission Alliance Liberia</td>
            <td>Adult Literacy & VSLA</td>
            <td>Project Manager</td>
            <td>Active</td>
            <td>Edit | Reset Password | Deactivate</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Users;