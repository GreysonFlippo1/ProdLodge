import { useState, useEffect } from "react";

const PrivacyPage = () => {

  //todo: add friend button opens a modal

  return (
    <div className="settings-pane">
      <div className="settins-pane-title">
        PRIVACY
      </div>
      <div className="settings-row">
        <div className="settings-name">
          PROFILE VISIBILITY
        </div>
        <input
          className="settings-input"
          type="text"
          placeholder="Public"
        />
      </div>
      <div className="settins-pane-title" style={{marginTop: '80px'}}>
        PRIVACY POLICY
      </div>
      <div className="settings-row">
        <div className="settings-name">
          This is where our privacy policy is going to be. Also, maybe link to the github open source.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
