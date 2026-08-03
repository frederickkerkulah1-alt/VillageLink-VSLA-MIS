import React from "react";

function KnowledgeSettings() {
  return (
    <div className="page-container">

      <h1>Knowledge Centre Settings</h1>

      <p>Configure the Knowledge Centre module.</p>

      <hr />

      <form>

        <label>Allow Resource Uploads</label>

        <select>
          <option>Yes</option>
          <option>No</option>
        </select>

        <br /><br />

        <label>Require Approval Before Publishing</label>

        <select>
          <option>Yes</option>
          <option>No</option>
        </select>

        <br /><br />

        <label>Default Resource Visibility</label>

        <select>
          <option>All Users</option>
          <option>Managers Only</option>
          <option>Administrators Only</option>
        </select>

        <br /><br />

        <label>Maximum Upload Size (MB)</label>

        <input
          type="number"
          defaultValue="100"
        />

        <br /><br />

        <button type="submit">
          Save Settings
        </button>

      </form>

    </div>
  );
}

export default KnowledgeSettings;