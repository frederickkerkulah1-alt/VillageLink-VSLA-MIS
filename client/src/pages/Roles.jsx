function Roles() {
  return (
    <div>

      <h1>Role Management</h1>

      <p>
        Create and manage user roles and system permissions.
      </p>

      <hr />

      <h2>Create New Role</h2>

      <form className="role-form">

        <input
          type="text"
          placeholder="Role Name"
        />

        <textarea
          placeholder="Role Description"
          rows="4"
        ></textarea>

        <h3>Permissions</h3>

        <label>
          <input type="checkbox" />
          Organization Management
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Project Management
        </label>

        <br />

        <label>
          <input type="checkbox" />
          User Management
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Group Management
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Member Management
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Weekly Meetings
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Cash Count
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Monitoring
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Savings & Loans
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Reports
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Dashboard Access
        </label>

        <br /><br />

        <button type="submit">
          Save Role
        </button>

      </form>

      <hr />

      <h2>System Roles</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Role</th>
            <th>Description</th>
            <th>Users</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>VillageLink Administrator</td>
            <td>Full system access</td>
            <td>1</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>Organization Administrator</td>
            <td>Manage one organization</td>
            <td>5</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>Project Manager</td>
            <td>Manage assigned projects</td>
            <td>12</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>Program Officer</td>
            <td>Program implementation</td>
            <td>18</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>Field Officer</td>
            <td>Field monitoring & supervision</td>
            <td>42</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>Saving Agent</td>
            <td>Weekly meeting data collection</td>
            <td>210</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>M&E Officer</td>
            <td>Monitoring and reporting</td>
            <td>8</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Roles;