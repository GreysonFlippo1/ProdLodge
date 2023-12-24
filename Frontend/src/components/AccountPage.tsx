
const AccountPage = (props) => {
  return (
    <div className="settings-pane">
      <div className="settins-pane-title">
        PROFILE
      </div>
      <div className="settings-row">
        <div className="settings-name">
          USER NAME
        </div>
        <input
          className="settings-input"
          type="text"
          placeholder="User name"
        />
      </div>
      <div className="settings-row">
        <div className="settings-name">
          EMAIL
        </div>
        <div className="settings-coloumns-container">
          <input
            className="settings-input"
            type="text"
            placeholder="Email"
          />
          <button
            className="settings-input remove-link-button"
            type="button"
          >
            Update Email
          </button>
        </div>
      </div>
      <div className="settings-row">
        <div className="settings-name">
          PASSWORD
        </div>
        <div className="settings-coloumns-container">
          <input
            className="settings-input"
            type="text"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="settings-row">
        <div className="settings-name">
          CONFIRM PASSWORD
        </div>
        <div className="settings-coloumns-container">
          <input
            className="settings-input"
            type="text"
            placeholder="Password"
          />
          <button
            className="settings-input remove-link-button"
            type="button"
          >
            Update Password
          </button>
        </div>
      </div>
      <div className="settings-row">
        <div className="settings-name">
          AVATAR
        </div>
        <div className="settings-coloumns-container">
          <div className="settings-profile-picture" />
          <button
            className="settings-input"
            type="button"
          >
            Change Avatar
          </button>
        </div>
      </div>
      <div className="settings-row">
        <button
          className="settings-input"
          type="button"
        >
          Logout
        </button>
      </div>
      <div className="settings-row">
        <button
          className="settings-input delete-button"
          type="button"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
