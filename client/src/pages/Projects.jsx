function Projects() {
  return (
    <div>
      <h1>Project Management</h1>

      <p>
        Register and manage projects under each organization.
      </p>

      <hr />

      <h2>Register Project</h2>

      <form className="project-form">

        <select>
          <option>Select Organization</option>
        </select>

        <input
          type="text"
          placeholder="Project Name"
        />

        <input
          type="text"
          placeholder="Project Code"
        />

        <select>
          <option>Select Country</option>
        </select>

        <input
          type="date"
        />

        <input
          type="date"
        />

        <select>
          <option>Status</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Suspended</option>
        </select>

        <button type="submit">
          Save Project
        </button>

      </form>

      <hr />

      <h2>Registered Projects</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Code</th>
            <th>Project</th>
            <th>Organization</th>
            <th>Country</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>PRJ001</td>
            <td>Adult Literacy & VSLA</td>
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

export default Projects;