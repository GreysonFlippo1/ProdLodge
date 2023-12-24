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
          Access is currently limited to a select number of users (due to database restrictions and cloud infrastructure / hosting costs). If you have been provided the link to this page, you have priviledged access to the site.
          <br />
          <br />
          The source code, which is unlicensed, can be viewed with the provided link. It should be noted that unauthorized replication, use, and distribution of the source code is strictly prohibited. All rights belong to the project's creator! <a href='https://github.com/AmanKoua/ProdLodge'>https://github.com/AmanKoua/ProdLodge</a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
