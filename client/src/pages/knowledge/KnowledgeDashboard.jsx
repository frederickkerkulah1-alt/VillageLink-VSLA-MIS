import React from "react";

function KnowledgeDashboard() {
  return (
    <div className="page-container">

      <h1>Knowledge Centre Dashboard</h1>

      <p>
        Welcome to the VillageLink Knowledge Centre.
      </p>

      <hr />

      <div className="dashboard-grid">

        <div className="card">
          <h3>Total Resources</h3>
          <h1>245</h1>
        </div>

        <div className="card">
          <h3>Training Topics</h3>
          <h1>48</h1>
        </div>

        <div className="card">
          <h3>Manuals</h3>
          <h1>36</h1>
        </div>

        <div className="card">
          <h3>Policies</h3>
          <h1>22</h1>
        </div>

        <div className="card">
          <h3>Templates</h3>
          <h1>41</h1>
        </div>

        <div className="card">
          <h3>Downloads</h3>
          <h1>1,560</h1>
        </div>

        <div className="card">
          <h3>Videos</h3>
          <h1>18</h1>
        </div>

        <div className="card">
          <h3>Best Practices</h3>
          <h1>80</h1>
        </div>

      </div>

      <hr />

      <h2>Recently Added Resources</h2>

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Date Added</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>VSLA Leadership Manual</td>
            <td>Manual</td>
            <td>18-Jul-2026</td>
          </tr>

          <tr>
            <td>Financial Literacy Guide</td>
            <td>Training</td>
            <td>17-Jul-2026</td>
          </tr>

          <tr>
            <td>Quarterly Reporting Template</td>
            <td>Template</td>
            <td>16-Jul-2026</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default KnowledgeDashboard;