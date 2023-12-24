import { useState, useEffect } from "react";

const mock_friends_data = {
  friends: [
    {
      id: '0',
      userName: 'Greyson Flippo',
      email: 'ac130veterans@gmail.com',
      status: 'friends',
      avatar: 'https://media.pitchfork.com/photos/650de105eacc5b460e151343/master/w_1280%2Cc_limit/Taylor-Swift-1989-Taylors-Version.jpg'
    },
    {
      id: '1',
      userName: 'Aman Koua',
      email: 'ac130veterans@gmail.com',
      status: 'friends',
      avatar: 'https://media.pitchfork.com/photos/650de105eacc5b460e151343/master/w_1280%2Cc_limit/Taylor-Swift-1989-Taylors-Version.jpg'
    },
  ],
  pending: [
    {
      id: '2',
      userName: 'Taylor Swift',
      email: 'ac130veterans@gmail.com',
      status: 'recieved',
      avatar: 'https://media.pitchfork.com/photos/650de105eacc5b460e151343/master/w_1280%2Cc_limit/Taylor-Swift-1989-Taylors-Version.jpg'
    },
    {
      id: '3',
      userName: 'DannyD',
      email: 'ac130veterans@gmail.com',
      status: 'sent',
      avatar: 'https://media.pitchfork.com/photos/650de105eacc5b460e151343/master/w_1280%2Cc_limit/Taylor-Swift-1989-Taylors-Version.jpg'
    },
  ],
  blocked: [
    {
      id: '4',
      userName: 'Kanye West',
      email: 'ac130veterans@gmail.com',
      status: 'blocked',
      avatar: 'https://media.pitchfork.com/photos/650de105eacc5b460e151343/master/w_1280%2Cc_limit/Taylor-Swift-1989-Taylors-Version.jpg'
    },
  ]
}

const FriendsPage = () => {

  //todo: add friend button opens a modal

  return (
    <div className="settings-pane">
      <div className="settins-pane-title">
        FRIENDS
      </div>
      {
        mock_friends_data.friends.map(friend => 
        <div className="settings-row" key={friend.id}>
          <div className="settings-name">
            {friend.userName}
          </div>
          <div className="settings-coloumns-container">
            <div className="friends-profile-picture" style={{backgroundImage: `url('${friend.avatar}')`}} />
            <input
              className="settings-input"
              type="text"
              placeholder={friend.email}
              disabled={true}
            />
            <button
              className="settings-input remove-link-button delete-button"
              type="button"
            >
              Remove Friend
            </button>
            <button
              className="settings-input remove-link-button delete-button"
              type="button"
            >
              Block
            </button>
          </div>
        </div>
      )}
      <div className="settings-row">
        <button
          className="settings-input"
          type="button"
        >
          + Add Friend
        </button>
      </div>

      <div className="settins-pane-title" style={{marginTop: '80px'}}>
        PENDING REQUESTS
      </div>
      {
        mock_friends_data.pending.map(friend => 
        <div className="settings-row" key={friend.id}>
          <div className="settings-name">
            {friend.userName}
          </div>
          <div className="settings-coloumns-container">
            <div className="friends-profile-picture" style={{backgroundImage: `url('${friend.avatar}')`}} />
            <input
              className="settings-input"
              type="text"
              placeholder={friend.email}
              disabled={true}
            />
            {
              friend.status === 'recieved' ? 
              <button
                className="settings-input remove-link-button"
                type="button"
              >
                Accept Request
              </button> : 
              <button
                className="settings-input remove-link-button delete-button"
                type="button"
              >
                Cancel Request
              </button>
            }
            <button
              className="settings-input remove-link-button delete-button"
              type="button"
            >
              Block
            </button>
          </div>
        </div>
      )}
      
    <div className="settins-pane-title" style={{marginTop: '80px'}}>
      BLOCKED USERS
    </div>

    {
      mock_friends_data.blocked.map(friend => 
      <div className="settings-row" key={friend.id}>
        <div className="settings-name">
          {friend.userName}
        </div>
        <div className="settings-coloumns-container">
          <div className="friends-profile-picture" style={{backgroundImage: `url('${friend.avatar}')`}} />
          <input
            className="settings-input"
            type="text"
            placeholder={friend.email}
            disabled={true}
          />
          <button
            className="settings-input remove-link-button"
            type="button"
          >
            Unblock
          </button>
        </div>
      </div>
    )}
    </div>
  );
};

export default FriendsPage;
