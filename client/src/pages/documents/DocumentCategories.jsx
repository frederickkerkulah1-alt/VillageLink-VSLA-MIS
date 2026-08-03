import React from "react";

function DocumentCategories() {
  return (
    <div className="page-container">

      <h1>Document Categories</h1>

      <p>Manage document categories used throughout VillageLink MIS.</p>

      <hr />

      <button>Add New Category</button>

      <br /><br />

      <table border="1" cellPadding="10" width="100%">

        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Total Documents</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>CAT001</td>
            <td>Policies</td>
            <td>Organization Policies</td>
            <td>42</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>CAT002</td>
            <td>Training Manuals</td>
            <td>Training Materials</td>
            <td>18</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

          <tr>
            <td>CAT003</td>
            <td>Monitoring Reports</td>
            <td>Field Monitoring Reports</td>
            <td>94</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default DocumentCategories;