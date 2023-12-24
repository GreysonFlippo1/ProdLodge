
const ProfilePage = (props) => {
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
          placeholder="User Name"
        />
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
            placeholder="User Name"
          >
            Change Avatar
          </button>
        </div>
      </div>
      <div className="settings-row">
        <div className="settings-name">
          SoundCloud Link
        </div>
        <div className="settings-coloumns-container">
        <input
          className="settings-input"
          type="text"
          placeholder="https://soundcloud.com/slabcity"
        />
        <button
          className="settings-input remove-link-button delete-button"
          type="button"
          placeholder="User Name"
        >
          Remove Link
        </button>
        </div>
      </div>
      <div className="settings-row">
        <div className="settings-name">
          YouTube Link
        </div>
        <div className="settings-coloumns-container">
        <input
          className="settings-input"
          type="text"
          placeholder="https://www.youtube.com"
        />
        <button
          className="settings-input remove-link-button delete-button"
          type="button"
          placeholder="User Name"
        >
          Remove Link
        </button>
        </div>
      </div>
      <div className="settings-row">
        <button
          className="settings-input"
          type="button"
          placeholder="User Name"
        >
          + New Link
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
