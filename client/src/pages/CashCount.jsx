function CashCount() {
  return (
    <div>

      <h1>Quarterly Cash Count & Group Performance Assessment</h1>

      <p>
        Quarterly monitoring completed by the Field Officer.
      </p>

      <hr />

      <h2>Group Information</h2>

      <form className="cashcount-form">

        <input
          type="date"
        />

        <input
          type="text"
          placeholder="Group Name"
        />

        <input
          type="text"
          placeholder="Group Number"
        />

        <input
          type="text"
          placeholder="Location"
        />

        <input
          type="text"
          placeholder="GPS Coordinates"
        />

        <input
          type="text"
          placeholder="Group Supervisor Name"
        />

        <input
          type="text"
          placeholder="Group Trainer Name"
        />

        <hr />

        <h2>Cycle Information</h2>

        <input
          type="number"
          placeholder="Deposits at Start of Cycle"
        />

        <textarea
          rows="3"
          placeholder="Topics Covered During This Quarter"
        ></textarea>

        <input
          type="date"
          placeholder="Date of First Training"
        />

        <input
          type="number"
          placeholder="Registered Members at Formation"
        />

        <input
          type="number"
          placeholder="Registered Members Now"
        />

        <input
          type="number"
          placeholder="Women Actively Attending"
        />

        <input
          type="number"
          placeholder="Drop-outs This Cycle"
        />

        <hr />

        <h2>Financial Performance</h2>

        <input
          type="number"
          placeholder="Value of Savings This Cycle"
        />

        <input
          type="number"
          placeholder="Value of Loans Outstanding"
        />

        <input
          type="number"
          placeholder="Number of Loans Outstanding"
        />

        <input
          type="number"
          placeholder="% Loans Handed Out"
        />

        <input
          type="text"
          placeholder="Loan / IGA Types"
        />

        <input
          type="number"
          placeholder="Write-offs This Cycle"
        />

        <input
          type="number"
          placeholder="New Property Acquired"
        />

        <input
          type="number"
          placeholder="External Debt"
        />

        <input
          type="number"
          placeholder="Dividends Paid This Cycle"
        />

        <input
          type="number"
          placeholder="Bank Balance"
        />

        <input
          type="number"
          placeholder="Social Fund Balance"
        />

        <input
          type="number"
          placeholder="Loan Fund Cash in Box"
        />

        <input
          type="number"
          placeholder="Average Savings Per Member"
        />

        <input
          type="number"
          placeholder="Average Loan Outstanding Per Group"
        />

        <hr />

        <h2>Profit / Loss Calculation</h2>

        <input
          type="number"
          placeholder="Total Savings"
        />

        <input
          type="number"
          placeholder="Total Fines"
        />

        <input
          type="number"
          placeholder="Loan Fund Cash in Box"
        />

        <input
          type="number"
          placeholder="Total Loan Handed Out"
        />

        <input
          type="number"
          placeholder="Loan Outstanding"
        />

        <input
          type="number"
          placeholder="Calculated Profit / Loss"
          readOnly
        />

        <textarea
          rows="4"
          placeholder="Field Officer Comments"
        ></textarea>

        <button type="submit">
          Submit Quarterly Assessment
        </button>

      </form>

    </div>
  );
}

export default CashCount;