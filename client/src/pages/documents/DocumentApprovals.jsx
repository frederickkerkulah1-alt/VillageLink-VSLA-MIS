import React from "react";

function DocumentApprovals() {
  return (
    <div className="page-container">

      <h1>Document Approvals</h1>

      <p>Review and approve uploaded documents.</p>

      <hr />

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>

            <th>Document ID</th>

            <th>Title</th>

            <th>Uploaded By</th>

            <th>Date</th>

            <th>Status</th>

            <th>Reviewer</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>DOC001</td>

            <td>VSLA Constitution</td>

            <td>Project Officer</td>

            <td>16-Jul-2026</td>

            <td>Pending</td>

            <td>Administrator</td>

            <td>

              Approve | Reject | View

            </td>

          </tr>

          <tr>

            <td>DOC002</td>

            <td>Financial Manual</td>

            <td>Finance Officer</td>

            <td>17-Jul-2026</td>

            <td>Pending</td>

            <td>Administrator</td>

            <td>

              Approve | Reject | View

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default DocumentApprovals;