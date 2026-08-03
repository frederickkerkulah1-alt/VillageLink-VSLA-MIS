function Districts() {
  return (
    <div>

      <h1>District Management</h1>

      <p>
        Register and manage districts within each county.
      </p>

      <hr />

      <h2>Register District</h2>

      <form className="district-form">

        <select>
          <option>Select Country</option>
          <option>Liberia</option>
        </select>

        <select>
          <option>Select County</option>
          <option>Bong County</option>
        </select>

        <input
          type="text"
          placeholder="District Name"
        />

        <input
          type="text"
          placeholder="District Code"
        />

        <select>
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">
          Save District
        </button>

      </form>

      <hr />

      <h2>Registered Districts</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Code</th>
            <th>District</th>
            <th>County</th>
            <th>Country</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>DST001</td>
            <td>Zota District</td>
            <td>Bong County</td>
            <td>Liberia</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Districts;