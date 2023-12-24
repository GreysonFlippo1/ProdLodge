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
          <button
            className="settings-input remove-link-button delete-button"
            type="button"
            placeholder="User Name"
          >
            Block
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
          <button
            className="settings-input remove-link-button delete-button"
            type="button"
            placeholder="User Name"
          >
            Block
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

    <div className="settins-pane-title" style={{marginTop: '80px'}}>
      PENDING REQUESTS
    </div>
    <div className="settings-row">
      <div className="settings-name">
        Taylor Swift
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
          className="settings-input remove-link-button"
          type="button"
          placeholder="User Name"
        >
          Accept Request
        </button>
        <button
          className="settings-input remove-link-button delete-button"
          type="button"
          placeholder="User Name"
        >
          Block
        </button>
      </div>
    </div>

    <div className="settings-row">
      <div className="settings-name">
        DannyD
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
          Cancel Request
        </button>
        <button
          className="settings-input remove-link-button delete-button"
          type="button"
          placeholder="User Name"
        >
          Block
        </button>
      </div>
    </div>

  <div className="settins-pane-title" style={{marginTop: '80px'}}>
    BLOCKED USERS
  </div>
  <div className="settings-row">
    <div className="settings-name">
      Kanye West
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
        className="settings-input remove-link-button"
        type="button"
        placeholder="User Name"
      >
        Unblock
      </button>
    </div>
  </div>

    </div>
  );
};

export default FriendsPage;
