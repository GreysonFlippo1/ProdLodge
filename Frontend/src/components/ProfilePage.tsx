
const mock_data = {
  links: [
    {
      id: 0,
      name: 'SoundCloud',
      url: 'https://soundcloud.com/slabcity'
    },
    {
      id: 1,
      name: 'YouTube',
      url: 'http://https//www.youtube.com/@thegreyhavens167'
    }
  ]
}


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
          placeholder="User name"
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
          >
            Change Avatar
          </button>
        </div>
      </div>
      {
      mock_data.links.map(link => 
        <div className="settings-row" key={link.id}>
          <div className="settings-name">
            {link.name}
          </div>
          <div className="settings-coloumns-container">
          <input
            className="settings-input"
            type="text"
            placeholder={link.url}
          />
          <button
            className="settings-input remove-link-button delete-button"
            type="button"
          >
            Remove Link
          </button>
          </div>
        </div>
      )}
      <div className="settings-row">
        <button
          className="settings-input"
          type="button"
        >
          + New Link
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
