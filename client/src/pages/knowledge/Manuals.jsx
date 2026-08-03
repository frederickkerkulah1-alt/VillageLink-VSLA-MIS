import React from "react";

function Manuals() {
  return (
    <div className="page-container">

      <h1>VSLA Manuals</h1>

      <p>
        Access all operational and training manuals.
      </p>

      <hr />

      <button>Upload Manual</button>

      <br /><br />

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>

            <th>ID</th>

            <th>Manual Title</th>

            <th>Version</th>

            <th>Category</th>

            <th>Date</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>MAN001</td>

            <td>VSLA Operations Manual</td>

            <td>3.0</td>

            <td>Operations</td>

            <td>2026</td>

            <td>View | Download</td>

          </tr>

          <tr>

            <td>MAN002</td>

            <td>Financial Management Manual</td>

            <td>2.1</td>

            <td>Finance</td>

            <td>2026</td>

            <td>View | Download</td>

          </tr>

          <tr>

            <td>MAN003</td>

            <td>Leadership Manual</td>

            <td>1.8</td>

            <td>Leadership</td>

            <td>2026</td>

            <td>View | Download</td>

          </tr>

          <tr>

            <td>MAN004</td>

            <td>Monitoring & Evaluation Manual</td>

            <td>2.0</td>

            <td>M&E</td>

            <td>2026</td>

            <td>View | Download</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Manuals;