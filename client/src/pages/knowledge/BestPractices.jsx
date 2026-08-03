import React from "react";

function BestPractices() {
  return (
    <div className="page-container">

      <h1>Best Practices</h1>

      <p>Document successful experiences and lessons learned.</p>

      <hr />

      <button>Add Best Practice</button>

      <br /><br />

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Community</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>BP001</td>
            <td>High Savings Mobilization</td>
            <td>Koryah</td>
            <td>Savings</td>
            <td>2026</td>
            <td>View</td>
          </tr>

          <tr>
            <td>BP002</td>
            <td>Successful Loan Recovery</td>
            <td>Palaquelleh</td>
            <td>Loans</td>
            <td>2026</td>
            <td>View</td>
          </tr>

          <tr>
            <td>BP003</td>
            <td>Women's Leadership Success</td>
            <td>Dizzah</td>
            <td>Leadership</td>
            <td>2026</td>
            <td>View</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default BestPractices;