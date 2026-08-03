function Communities() {
  return (
    <div>

      <h1>Community Management</h1>

      <p>
        Register and manage communities where VSLA groups operate.
      </p>

      <hr />

      <h2>Register Community</h2>

      <form className="community-form">

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

        <input
          type="text"
          placeholder="Community Name"
        />

        <input
          type="text"
          placeholder="Community Code"
        />

        <input
          type="text"
          placeholder="GPS Coordinates (Optional)"
        />

        <select>
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">
          Save Community
        </button>

      </form>

      <hr />

      <h2>Registered Communities</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Code</th>
            <th>Community</th>
            <th>Clan</th>
            <th>District</th>
            <th>County</th>
            <th>Country</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>COM001</td>
            <td>Garmu</td>
            <td>Gwolapolu Clan</td>
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

export default Communities;