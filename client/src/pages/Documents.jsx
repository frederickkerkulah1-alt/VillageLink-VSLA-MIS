function Documents() {
  return (
    <div>

      <h1>Document Management System</h1>

      <p>
        Upload, organize, manage and retrieve all VillageLink documents.
      </p>

      <hr />

      <h2>Upload New Document</h2>

      <form className="document-form">

        <select>
          <option>Select Organization</option>
        </select>

        <select>
          <option>Select Project</option>
        </select>

        <select>
          <option>Document Category</option>
          <option>Policy</option>
          <option>VSLA Constitution</option>
          <option>Training Manual</option>
          <option>Monitoring Report</option>
          <option>Financial Report</option>
          <option>Audit Report</option>
          <option>Meeting Minutes</option>
          <option>Agreement / MOU</option>
          <option>Photos</option>
          <option>Videos</option>
          <option>Template</option>
          <option>Other</option>
        </select>

        <input
          type="text"
          placeholder="Document Title"
        />

        <textarea
          placeholder="Document Description"
          rows="4"
        ></textarea>

        <input type="file" />

        <input
          type="text"
          placeholder="Version"
        />

        <input
          type="text"
          placeholder="Prepared By"
        />

        <input
          type="date"
        />

        <select>
          <option>Status</option>
          <option>Draft</option>
          <option>Pending Approval</option>
          <option>Approved</option>
          <option>Archived</option>
        </select>

        <button type="submit">
          Upload Document
        </button>

      </form>

      <hr />

      <h2>Document Library</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>

            <th>ID</th>

            <th>Title</th>

            <th>Category</th>

            <th>Organization</th>

            <th>Project</th>

            <th>Version</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>DOC001</td>

            <td>VSLA Constitution</td>

            <td>Policy</td>

            <td>Mission Alliance Liberia</td>

            <td>Adult Literacy & VSLA</td>

            <td>1.0</td>

            <td>Approved</td>

            <td>View | Download | Edit | Delete</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Documents;