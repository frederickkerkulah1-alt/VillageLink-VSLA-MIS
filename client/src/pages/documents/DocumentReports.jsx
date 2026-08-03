import React from "react";

function DocumentReports() {
  return (
    <div className="page-container">

      <h1>Document Reports</h1>

      <p>Generate reports for all documents.</p>

      <hr />

      <button>Organization Report</button>{" "}
      <button>Project Report</button>{" "}
      <button>Category Report</button>{" "}
      <button>Downloads Report</button>{" "}
      <button>Approval Report</button>

      <hr />

      <h2>Available Reports</h2>

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>
            <th>Report</th>
            <th>Description</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Organization Documents</td>
            <td>Documents by Organization</td>
            <td>Generate</td>
          </tr>

          <tr>
            <td>Project Documents</td>
            <td>Documents by Project</td>
            <td>Generate</td>
          </tr>

          <tr>
            <td>Category Summary</td>
            <td>Documents grouped by category</td>
            <td>Generate</td>
          </tr>

          <tr>
            <td>Approval Status</td>
            <td>Pending and approved documents</td>
            <td>Generate</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default DocumentReports;