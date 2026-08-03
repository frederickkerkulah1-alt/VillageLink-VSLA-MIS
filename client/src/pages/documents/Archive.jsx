import React from "react";

function Archive() {
  return (
    <div className="page-container">
      <h1>Document Archive</h1>

      <p>
        Archived documents are stored here.
      </p>

      <hr />

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Document</th>
            <th>Archived By</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Annual Report 2023</td>
            <td>Administrator</td>
            <td>01-Jan-2026</td>
            <td>Archived</td>
          </tr>

          <tr>
            <td>Old VSLA Manual</td>
            <td>Project Manager</td>
            <td>15-Feb-2026</td>
            <td>Archived</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Archive;