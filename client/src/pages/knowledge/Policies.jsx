import React from "react";

function Policies() {
  return (
    <div className="page-container">

      <h1>Policies & Guidelines</h1>

      <p>Manage organizational policies and operational guidelines.</p>

      <hr />

      <button>Add New Policy</button>

      <br /><br />

      <table border="1" cellPadding="10" width="100%">

        <thead>
          <tr>
            <th>Policy ID</th>
            <th>Policy Name</th>
            <th>Category</th>
            <th>Version</th>
            <th>Effective Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>POL001</td>
            <td>Financial Management Policy</td>
            <td>Finance</td>
            <td>2.0</td>
            <td>01-Jan-2026</td>
            <td>Active</td>
            <td>View | Download</td>
          </tr>

          <tr>
            <td>POL002</td>
            <td>Child Protection Policy</td>
            <td>Safeguarding</td>
            <td>1.0</td>
            <td>15-Feb-2026</td>
            <td>Active</td>
            <td>View | Download</td>
          </tr>

          <tr>
            <td>POL003</td>
            <td>Data Protection Policy</td>
            <td>ICT</td>
            <td>1.5</td>
            <td>10-Mar-2026</td>
            <td>Active</td>
            <td>View | Download</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Policies;