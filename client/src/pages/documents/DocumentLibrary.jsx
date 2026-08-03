import React from "react";

function DocumentLibrary() {
  return (
    <div className="page-container">

      <h1>Document Library</h1>

      <p>
        Browse and manage all uploaded VillageLink documents.
      </p>

      <hr />

      <input
        type="text"
        placeholder="Search documents..."
      />

      <select>
        <option>All Categories</option>
        <option>Policies</option>
        <option>Manuals</option>
        <option>Reports</option>
        <option>Templates</option>
        <option>Photos</option>
        <option>Videos</option>
      </select>

      <button>Search</button>

      <hr />

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>

            <th>ID</th>

            <th>Title</th>

            <th>Category</th>

            <th>Organization</th>

            <th>Project</th>

            <th>Version</th>

            <th>Status</th>

            <th>Uploaded By</th>

            <th>Date</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>DOC001</td>

            <td>VSLA Constitution</td>

            <td>Policy</td>

            <td>Mission Alliance Liberia</td>

            <td>Adult Literacy</td>

            <td>1.0</td>

            <td>Approved</td>

            <td>Administrator</td>

            <td>15-Jul-2026</td>

            <td>

              View | Download | Edit | Delete

            </td>

          </tr>

          <tr>

            <td>DOC002</td>

            <td>Financial Manual</td>

            <td>Manual</td>

            <td>VillageLink</td>

            <td>Training</td>

            <td>2.1</td>

            <td>Approved</td>

            <td>Project Manager</td>

            <td>16-Jul-2026</td>

            <td>

              View | Download | Edit | Delete

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default DocumentLibrary;