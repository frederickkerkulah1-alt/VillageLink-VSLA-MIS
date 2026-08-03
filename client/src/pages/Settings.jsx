function Settings() {
  return (
    <div>

      <h1>Organization Settings</h1>

      <p>
        Configure organization information and system preferences.
      </p>

      <hr />

      <h2>General Information</h2>

      <form className="settings-form">

        <input
          type="text"
          placeholder="Organization Name"
        />

        <input
          type="file"
        />

        <select>
          <option>Select Country</option>
          <option>Liberia</option>
        </select>

        <select>
          <option>Select Currency</option>
          <option>Liberian Dollar (LRD)</option>
          <option>US Dollar (USD)</option>
        </select>

        <select>
          <option>Financial Year</option>
          <option>January - December</option>
          <option>July - June</option>
        </select>

        <select>
          <option>Select Time Zone</option>
          <option>Africa/Monrovia (GMT)</option>
        </select>

        <select>
          <option>Default Language</option>
          <option>English</option>
          <option>French</option>
          <option>Portuguese</option>
        </select>

        <select>
          <option>Reporting Frequency</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Annually</option>
        </select>

        <hr />

        <h2>Email Settings</h2>

        <input
          type="email"
          placeholder="Organization Email"
        />

        <input
          type="text"
          placeholder="SMTP Server"
        />

        <input
          type="number"
          placeholder="SMTP Port"
        />

        <hr />

        <h2>SMS Settings</h2>

        <input
          type="text"
          placeholder="SMS Provider"
        />

        <input
          type="text"
          placeholder="SMS API Key"
        />

        <hr />

        <button type="submit">
          Save Settings
        </button>

      </form>

    </div>
  );
}

export default Settings;