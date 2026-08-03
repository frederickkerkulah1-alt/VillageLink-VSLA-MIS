function Savings() {
  return (
    <div>

      <h1>Savings Transactions</h1>

      <p>
        Record weekly member savings during VSLA meetings.
      </p>

      <hr />

      <h2>Transaction Information</h2>

      <form className="savings-form">

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
          <option>Select Weekly Meeting</option>
        </select>

        <select>
          <option>Select Member</option>
        </select>

        <input
          type="date"
        />

        <input
          type="number"
          placeholder="Number of Shares Purchased"
        />

        <input
          type="number"
          placeholder="Price Per Share"
        />

        <input
          type="number"
          placeholder="Total Savings Amount"
        />

        <textarea
          rows="3"
          placeholder="Remarks"
        ></textarea>

        <button type="submit">
          Save Transaction
        </button>

      </form>

      <hr />

      <h2>Weekly Savings Register</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>

            <th>Date</th>
            <th>Meeting</th>
            <th>Member</th>
            <th>Shares</th>
            <th>Amount</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>12-Jul-2026</td>
            <td>Week 15</td>
            <td>Mary Doe</td>
            <td>5</td>
            <td>LRD 500</td>
            <td>Edit</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Savings;