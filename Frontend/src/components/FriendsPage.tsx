import { useState, useEffect } from "react";

const FriendsPage = () => {

  //todo: add friend button opens a modal

  return (
    <div className="settings-pane">
      <div className="settins-pane-title">
        FRIENDS
      </div>
      <div className="settings-row">
        <div className="settings-name">
          Greyson Flippo
        </div>
        <div className="settings-coloumns-container">
          <div className="friends-profile-picture" />
          <input
            className="settings-input"
            type="text"
            placeholder="ac130veterans@gmail.com"
            disabled={true}
          />
          <button
            className="settings-input remove-link-button delete-button"
            type="button"
            placeholder="User Name"
          >
            Remove Friend
          </button>
        </div>
      </div>
      <div className="settings-row">
        <div className="settings-name">
          Aman Koua
        </div>
        <div className="settings-coloumns-container">
          <div className="friends-profile-picture" />
          <input
            className="settings-input"
            type="text"
            placeholder="aman@email.com"
            disabled={true}
          />
          <button
            className="settings-input remove-link-button delete-button"
            type="button"
            placeholder="User Name"
          >
            Remove Friend
          </button>
        </div>
      </div>
      <div className="settings-row">
        <button
          className="settings-input"
          type="button"
          placeholder="User Name"
        >
          + Add Friend
        </button>
      </div>
    </div>
  );
};

export default FriendsPage;
