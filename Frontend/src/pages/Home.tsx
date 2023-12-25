import React, { useState, useContext, useEffect } from "react";

const mock_data = {
  songs:
  [
    {
      "owner": "Aman Koua",
      "ownerId": "64f2154e6bdca2f092de5e78",
      'avatar': 'https://media.pitchfork.com/photos/650de105eacc5b460e151343/master/w_1280%2Cc_limit/Taylor-Swift-1989-Taylors-Version.jpg', //added
      "title": "Fathom",
      "description": "I might finish this one day",
      "id": "64f217026bdca2f092de5eb1",
      "visibility": "public",
      "userConnection": "friend",
      "upvoteCount": 123, //added
      "downvoteCount": 5, //added
      "created": 1696277817833, //added
      "edited": 1696277817833, //added
      "commentsList": [
          "651b23fd71015d39557790be"
      ],
      "chains": [
          {
              "name": "reverb station",
              "data": "{\"data\":[[[{\"type\":\"Blank\"}]],[[{\"type\":\"Blank\"},{\"type\":\"Lowpass\",\"isEnabled\":true,\"frequency\":\"617\",\"resonance\":\"-1\"}]],[[{\"type\":\"Blank\"},{\"type\":\"Reverb\",\"isEnabled\":true,\"impulse\":\"4\"}]],[[{\"type\":\"Blank\"}]],[[{\"type\":\"Blank\"},{\"type\":\"Lowpass\",\"isEnabled\":true,\"frequency\":\"17483\",\"resonance\":\"19\"},{\"type\":\"Reverb\",\"isEnabled\":true,\"impulse\":\"9\"}]],[[{\"type\":\"Blank\"}]]]}",
              "id": "64f38aa160c4ac18e93b3444"
          },
          {
              "name": "Blank",
              "data": "{\"data\":[[[{\"type\":\"Blank\"}]],[[{\"type\":\"Blank\"}]],[[{\"type\":\"Blank\"}]],[[{\"type\":\"Blank\"}]],[[{\"type\":\"Blank\"}]],[[{\"type\":\"Blank\"}]]]}",
              "id": "64f6a116ae0c0b8689403c51"
          }
      ],
      "trackIds": [
          "64f217036bdca2f092de5eb3",
          "64f217046bdca2f092de5ec4",
          "64f217066bdca2f092de5eda",
          "64f217096bdca2f092de5eed",
          "64f2170a6bdca2f092de5f01",
          "64f2170e6bdca2f092de5f15"
      ]
    },
  ],
  comments: [{
    "comment": {
        "songId": "64f216426bdca2f092de5e8a",
        "creatorId": "6506742639bbbfa2b751f113",
        "creatorUserName": "friend4",
        "creationTime": 1696277817833,
        "data": "The bass for this song is inspired by Mick Gordon's sound design. Specifically, I learned the techniques required to create it by watching his audio developers conference talk. It's an interesting talk I would recommend to anyone that likes this sound design!",
        "hasChain": false,
        "chain": {
            "name": "N/A",
            "data": "N/A"
        },
        "replyId": "empty",
        "upvoteCount": 2,
        "downvoteCount": 0,
        "hasUserUpvoted": false,
        "hasUserDownvoted": false,
        "replyList": [
            "651c387271015d3955779a18",
            "656bd0a40148a464ca4dab9b"
        ]
    }
  }
  ]
}

const SongCard = (song:object, isEditing:boolean) => {

  const isPlaying = false

  return <div className="song-card">
    <div className='song-info'> 
      <div className='song-pp' style={{backgroundImage: `url('${song.avatar}')`}} />
      <div className="song-title">{song.title}</div>
      <div className='song-dash' />
      <div className="song-artist">{song.owner}</div>
      <div className="song-visibility">({song.visibility})</div>
    </div>
    <div className='song-info'>
      <div className='song-desc'>{song.description}</div>
    </div>
    <div className='song-info'>
      <div className='play-pause-bttn'>{isPlaying ? '\u23F8' : '\u23F5'}</div>
      <div className="song-playback"></div>
    </div>
    <div className='song-info'>
      <div className='song-modules-title'>Modules</div>
    </div>
    <div className='song-info'>
      <div className='add-module-bttn'>+ Add Module</div>
    </div>
    <div className='song-info'>
      <div className='ld-bttn'>L</div>
      <div className='ld-bttn'>D</div>
      <div className='ld-bttn'>C</div>
    </div>

    {/* Profile Pic | Title - Artist
    <br />
    Description
    <br />
    Play button | playback scrubber / visualzier
    <br />
    (expandable) Modules / add Module
    <br />
    (expandable) Like/Dislike & Comments */}
  </div>
}

const Home = () => {
  const [selectedPage, setSelectedPage] = useState("personal");

  return (
    <div className="settings-container">
      <div className="settings-navigation">
        <div className="settings-navigation-label">
          VIEW SONGS
        </div>
        <div className={`settings-navigation-options ${selectedPage === 'personal' ? 'selected' : ''}`} onClick={() => {setSelectedPage('personal')}}>
          My Songs
        </div>
        <div className={`settings-navigation-options ${selectedPage === 'friends' ? 'selected' : ''}`} onClick={() => {setSelectedPage('friends')}}>
          Friend's Songs
        </div>
        <div className={`settings-navigation-options ${selectedPage === 'public' ? 'selected' : ''}`} onClick={() => {setSelectedPage('public')}}>
          Public Songs
        </div>
      </div>
      <div className="songs-feed">
        {
          SongCard(mock_data.songs[0], false)
        }
        {
          SongCard(mock_data.songs[0], false)
        }
      </div>
    </div>
  );
};

export default Home;
