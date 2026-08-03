function Clans() {
  return (
    <div>

      <h1>Clan / Chiefdom Management</h1>

      <p>
        Register and manage clans or chiefdoms within each district.
      </p>

      <hr />

      <h2>Register Clan / Chiefdom</h2>

      <form className="clan-form">

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

        <input
          type="text"
          placeholder="Clan / Chiefdom Name"
        />

        <input
          type="text"
          placeholder="Clan Code"
        />

        <select>
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">
          Save Clan
        </button>

      </form>

      <hr />

      <h2>Registered Clans</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Code</th>
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
            <td>CL001</td>
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

export default Clans;