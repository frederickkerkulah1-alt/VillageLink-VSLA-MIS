import React from "react";

function TrainingTopics() {
  return (
    <div className="page-container">

      <h1>Recommended Training Topics</h1>

      <p>
        Recommended training materials for VillageLink users.
      </p>

      <hr />

      <button>Add Training Topic</button>

      <br /><br />

      <table border="1" cellPadding="10" width="100%">

        <thead>

          <tr>
            <th>ID</th>
            <th>Training Topic</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Level</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>TR001</td>
            <td>VSLA Methodology</td>
            <td>VSLA</td>
            <td>2 Days</td>
            <td>Basic</td>
            <td>View</td>
          </tr>

          <tr>
            <td>TR002</td>
            <td>Financial Literacy</td>
            <td>Finance</td>
            <td>3 Days</td>
            <td>Intermediate</td>
            <td>View</td>
          </tr>

          <tr>
            <td>TR003</td>
            <td>Leadership & Governance</td>
            <td>Leadership</td>
            <td>2 Days</td>
            <td>Advanced</td>
            <td>View</td>
          </tr>

          <tr>
            <td>TR004</td>
            <td>Business Development Skills</td>
            <td>Business</td>
            <td>4 Days</td>
            <td>Intermediate</td>
            <td>View</td>
          </tr>

          <tr>
            <td>TR005</td>
            <td>Climate Smart Agriculture</td>
            <td>Agriculture</td>
            <td>3 Days</td>
            <td>Intermediate</td>
            <td>View</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default TrainingTopics;