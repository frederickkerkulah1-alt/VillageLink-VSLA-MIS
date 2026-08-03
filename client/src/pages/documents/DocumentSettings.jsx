import React from "react";

function DocumentSettings() {
  return (
    <div className="page-container">

      <h1>Document Settings</h1>

      <p>Configure Document Management System settings.</p>

      <hr />

      <form>

        <label>Maximum File Size (MB)</label>

        <input
          type="number"
          defaultValue="20"
        />

        <br /><br />

        <label>Allowed File Types</label>

        <input
          type="text"
          defaultValue="pdf, docx, xlsx, pptx, jpg, png, mp4"
        />

        <br /><br />

        <label>Default Document Status</label>

        <select>

          <option>Pending Approval</option>

          <option>Approved</option>

          <option>Draft</option>

        </select>

        <br /><br />

        <label>Document Retention Period</label>

        <select>

          <option>1 Year</option>

          <option>3 Years</option>

          <option>5 Years</option>

          <option>Permanent</option>

        </select>

        <br /><br />

        <button type="submit">

          Save Settings

        </button>

      </form>

    </div>
  );
}

export default DocumentSettings;