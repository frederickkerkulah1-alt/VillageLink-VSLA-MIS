function Organizations() {
  return (
    <div>

      <h1>Organization Management</h1>

      <p>
        Register and manage organizations using the VillageLink Platform.
      </p>

      <hr />

      <h2>Register Organization</h2>

      <form className="organization-form">

        <input type="text" placeholder="Organization Name" />

        <input type="text" placeholder="Organization Acronym" />

        <input type="text" placeholder="Registration Number" />

        <input type="email" placeholder="Official Email Address" />

        <input type="text" placeholder="Phone Number" />

        <input type="text" placeholder="Head Office Address" />

        <input type="text" placeholder="Website (Optional)" />

        <select>
          <option>Select Country</option>
        </select>

        <select>
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">
          Save Organization
        </button>

      </form>

      <hr />

      <h2>Registered Organizations</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>ID</th>
            <th>Organization</th>
            <th>Country</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>ORG001</td>
            <td>Mission Alliance Liberia</td>
            <td>Liberia</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Organizations;