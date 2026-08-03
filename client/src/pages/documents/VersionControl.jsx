import React from "react";

function VersionControl() {
  return (
    <div className="page-container">

      <h1>Document Version Control</h1>

      <p>Track all document versions and revisions.</p>

      <hr />

      <table border="1" cellPadding="10" width="100%">

        <thead>
          <tr>
            <th>Document ID</th>
            <th>Title</th>
            <th>Version</th>
            <th>Updated By</th>
            <th>Date Updated</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>DOC001</td>
            <td>VSLA Constitution</td>
            <td>2.0</td>
            <td>Administrator</td>
            <td>20-Jul-2026</td>
            <td>Current</td>
            <td>View History</td>
          </tr>

          <tr>
            <td>DOC002</td>
            <td>Financial Manual</td>
            <td>1.5</td>
            <td>Finance Officer</td>
            <td>18-Jul-2026</td>
            <td>Current</td>
            <td>View History</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default VersionControl;