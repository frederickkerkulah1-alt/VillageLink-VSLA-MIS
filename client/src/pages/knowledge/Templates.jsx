import React from "react";

function Templates() {
  return (
    <div className="page-container">

      <h1>Templates Library</h1>

      <p>Standard templates used across VillageLink MIS.</p>

      <hr />

      <button>Upload Template</button>

      <br /><br />

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>
            <th>Template ID</th>
            <th>Template Name</th>
            <th>Format</th>
            <th>Category</th>
            <th>Downloads</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>TMP001</td>
            <td>Monthly Monitoring Report</td>
            <td>Word</td>
            <td>Monitoring</td>
            <td>132</td>
            <td>Download</td>
          </tr>

          <tr>
            <td>TMP002</td>
            <td>Quarterly Financial Report</td>
            <td>Excel</td>
            <td>Finance</td>
            <td>95</td>
            <td>Download</td>
          </tr>

          <tr>
            <td>TMP003</td>
            <td>Attendance Register</td>
            <td>Excel</td>
            <td>Administration</td>
            <td>214</td>
            <td>Download</td>
          </tr>

          <tr>
            <td>TMP004</td>
            <td>Meeting Minutes</td>
            <td>Word</td>
            <td>Administration</td>
            <td>160</td>
            <td>Download</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Templates;