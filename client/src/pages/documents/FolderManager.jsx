import React from "react";

function FolderManager() {
  return (
    <div className="page-container">

      <h1>Folder Manager</h1>

      <p>Organize documents into folders.</p>

      <hr />

      <button>Create Folder</button>

      <hr />

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>

            <th>Folder Name</th>

            <th>Organization</th>

            <th>Project</th>

            <th>Documents</th>

            <th>Created By</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Policies</td>

            <td>Mission Alliance Liberia</td>

            <td>Adult Literacy</td>

            <td>35</td>

            <td>Administrator</td>

            <td>Open | Edit | Delete</td>

          </tr>

          <tr>

            <td>Financial Reports</td>

            <td>VillageLink</td>

            <td>VSLA MIS</td>

            <td>120</td>

            <td>Finance Officer</td>

            <td>Open | Edit | Delete</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default FolderManager;