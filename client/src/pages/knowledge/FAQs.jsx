import React from "react";

function FAQs() {
  return (
    <div className="page-container">

      <h1>Frequently Asked Questions</h1>

      <p>Common questions and answers about VillageLink MIS.</p>

      <hr />

      <table border="1" cellPadding="10" width="100%">

        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>How do I register a VSLA group?</td>
            <td>Go to Group Management and click "Add Group".</td>
          </tr>

          <tr>
            <td>How do I upload reports?</td>
            <td>Open Document Management and choose Upload Document.</td>
          </tr>

          <tr>
            <td>Who can approve documents?</td>
            <td>Users with approval permissions such as Administrators or Project Managers.</td>
          </tr>

          <tr>
            <td>How do I reset my password?</td>
            <td>Use the Forgot Password page on the login screen.</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default FAQs;