import React from "react";

function Videos() {
  return (
    <div className="page-container">

      <h1>Training Videos</h1>

      <p>Browse all training videos available in VillageLink MIS.</p>

      <hr />

      <button>Upload Video</button>

      <br /><br />

      <table border="1" cellPadding="10" width="100%">

        <thead>
          <tr>
            <th>ID</th>
            <th>Video Title</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Views</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>VID001</td>
            <td>Introduction to VSLA</td>
            <td>VSLA</td>
            <td>15 Minutes</td>
            <td>680</td>
            <td>Watch</td>
          </tr>

          <tr>
            <td>VID002</td>
            <td>Loan Management</td>
            <td>Finance</td>
            <td>22 Minutes</td>
            <td>512</td>
            <td>Watch</td>
          </tr>

          <tr>
            <td>VID003</td>
            <td>Leadership Skills</td>
            <td>Leadership</td>
            <td>18 Minutes</td>
            <td>403</td>
            <td>Watch</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Videos;