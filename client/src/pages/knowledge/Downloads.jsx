import React from "react";

function Downloads() {
  return (
    <div className="page-container">

      <h1>Downloads Centre</h1>

      <p>Download approved VillageLink resources.</p>

      <hr />

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>

            <th>ID</th>

            <th>Resource</th>

            <th>Type</th>

            <th>Category</th>

            <th>Size</th>

            <th>Downloads</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>DL001</td>

            <td>VSLA Manual</td>

            <td>PDF</td>

            <td>Manual</td>

            <td>4.2 MB</td>

            <td>520</td>

            <td>Download</td>

          </tr>

          <tr>

            <td>DL002</td>

            <td>Loan Register</td>

            <td>Excel</td>

            <td>Template</td>

            <td>230 KB</td>

            <td>412</td>

            <td>Download</td>

          </tr>

          <tr>

            <td>DL003</td>

            <td>Business Development Slides</td>

            <td>PowerPoint</td>

            <td>Training</td>

            <td>8.1 MB</td>

            <td>145</td>

            <td>Download</td>

          </tr>

          <tr>

            <td>DL004</td>

            <td>KoboToolbox VSLA Form</td>

            <td>XLSForm</td>

            <td>Data Collection</td>

            <td>340 KB</td>

            <td>276</td>

            <td>Download</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Downloads;