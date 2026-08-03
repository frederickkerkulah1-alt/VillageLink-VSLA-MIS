import React from "react";

function UploadDocument() {
  return (
    <div className="page-container">

      <h1>Upload Document</h1>

      <p>Upload documents into the VillageLink Document Management System.</p>

      <hr />

      <form>

        <h2>Document Information</h2>

        <label>Organization</label>
        <select>
          <option>Select Organization</option>
        </select>

        <label>Project</label>
        <select>
          <option>Select Project</option>
        </select>

        <label>Document Category</label>
        <select>
          <option>Select Category</option>
          <option>Policy</option>
          <option>Manual</option>
          <option>Financial Report</option>
          <option>Monitoring Report</option>
          <option>Agreement</option>
          <option>Training Material</option>
          <option>Photo</option>
          <option>Video</option>
          <option>Template</option>
          <option>Other</option>
        </select>

        <label>Document Title</label>
        <input
          type="text"
          placeholder="Document Title"
        />

        <label>Description</label>
        <textarea
          rows="5"
          placeholder="Document Description"
        ></textarea>

        <label>Version</label>
        <input
          type="text"
          placeholder="Version"
        />

        <label>Prepared By</label>
        <input
          type="text"
          placeholder="Prepared By"
        />

        <label>Document Date</label>
        <input type="date" />

        <label>Status</label>
        <select>
          <option>Draft</option>
          <option>Pending Approval</option>
          <option>Approved</option>
          <option>Archived</option>
        </select>

        <label>Upload File</label>
        <input type="file" />

        <br />
        <br />

        <button type="submit">
          Upload Document
        </button>

      </form>

    </div>
  );
}

export default UploadDocument;