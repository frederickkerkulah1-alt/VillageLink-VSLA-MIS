import React from "react";

function DocumentDashboard() {
  return (
    <div className="page-container">

      <h1>Document Management Dashboard</h1>

      <p>
        Manage, monitor and organize all VillageLink MIS documents.
      </p>

      <hr />

      <div className="dashboard-grid">

        <div className="card">
          <h3>Total Documents</h3>
          <h1>1,258</h1>
        </div>

        <div className="card">
          <h3>Approved Documents</h3>
          <h1>1,120</h1>
        </div>

        <div className="card">
          <h3>Pending Approval</h3>
          <h1>45</h1>
        </div>

        <div className="card">
          <h3>Archived Documents</h3>
          <h1>93</h1>
        </div>

        <div className="card">
          <h3>Document Categories</h3>
          <h1>15</h1>
        </div>

        <div className="card">
          <h3>Total Downloads</h3>
          <h1>4,870</h1>
        </div>

        <div className="card">
          <h3>Storage Used</h3>
          <h1>8.2 GB</h1>
        </div>

        <div className="card">
          <h3>Recent Uploads</h3>
          <h1>28</h1>
        </div>

      </div>

      <hr />

      <h2>Recent Documents</h2>

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Organization</th>
            <th>Project</th>
            <th>Status</th>
            <th>Date Uploaded</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>DOC001</td>
            <td>VSLA Constitution</td>
            <td>Policy</td>
            <td>Mission Alliance Liberia</td>
            <td>Adult Literacy</td>
            <td>Approved</td>
            <td>15-Jul-2026</td>
          </tr>

          <tr>
            <td>DOC002</td>
            <td>Quarterly Monitoring Report</td>
            <td>Report</td>
            <td>Mission Alliance Liberia</td>
            <td>VSLA Project</td>
            <td>Pending</td>
            <td>16-Jul-2026</td>
          </tr>

          <tr>
            <td>DOC003</td>
            <td>Financial Guidelines</td>
            <td>Manual</td>
            <td>VillageLink</td>
            <td>System</td>
            <td>Approved</td>
            <td>18-Jul-2026</td>
          </tr>

        </tbody>

      </table>

      <hr />

      <h2>Document Categories Summary</h2>

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>
            <th>Category</th>
            <th>Total Documents</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Policies</td>
            <td>120</td>
          </tr>

          <tr>
            <td>Training Manuals</td>
            <td>85</td>
          </tr>

          <tr>
            <td>Financial Reports</td>
            <td>240</td>
          </tr>

          <tr>
            <td>Monitoring Reports</td>
            <td>195</td>
          </tr>

          <tr>
            <td>Templates</td>
            <td>160</td>
          </tr>

          <tr>
            <td>Photos</td>
            <td>310</td>
          </tr>

          <tr>
            <td>Videos</td>
            <td>148</td>
          </tr>

        </tbody>

      </table>

      <hr />

      <h2>Quick Actions</h2>

      <button>Upload Document</button>{" "}
      <button>View Library</button>{" "}
      <button>Pending Approvals</button>{" "}
      <button>Archive</button>{" "}
      <button>Generate Report</button>

    </div>
  );
}

export default DocumentDashboard;