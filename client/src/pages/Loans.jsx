function Loans() {
  return (
    <div>

      <h1>Loan Management</h1>

      <p>
        Register, approve, disburse and monitor member loans.
      </p>

      <hr />

      <h2>Loan Application</h2>

      <form className="loan-form">

        <select>
          <option>Select Organization</option>
        </select>

        <select>
          <option>Select Project</option>
        </select>

        <select>
          <option>Select Group</option>
        </select>

        <select>
          <option>Select Member</option>
        </select>

        <input
          type="date"
        />

        <input
          type="number"
          placeholder="Loan Amount Requested"
        />

        <input
          type="number"
          placeholder="Interest Rate (%)"
        />

        <input
          type="number"
          placeholder="Repayment Period (Weeks)"
        />

        <input
          type="text"
          placeholder="Loan Purpose"
        />

        <textarea
          rows="3"
          placeholder="Loan Justification"
        ></textarea>

        <hr />

        <h2>Approval Information</h2>

        <select>
          <option>Loan Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
          <option>Disbursed</option>
          <option>Completed</option>
        </select>

        <input
          type="date"
        />

        <input
          type="text"
          placeholder="Approved By"
        />

        <hr />

        <h2>Disbursement</h2>

        <input
          type="date"
        />

        <input
          type="number"
          placeholder="Amount Disbursed"
        />

        <hr />

        <h2>Repayment</h2>

        <input
          type="number"
          placeholder="Amount Repaid"
        />

        <input
          type="date"
        />

        <input
          type="number"
          placeholder="Outstanding Balance"
        />

        <button type="submit">
          Save Loan Record
        </button>

      </form>

      <hr />

      <h2>Loan Register</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Loan ID</th>
            <th>Member</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Outstanding</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>LN001</td>
            <td>Mary Doe</td>
            <td>LRD 5,000</td>
            <td>Disbursed</td>
            <td>LRD 2,500</td>
            <td>View</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Loans;