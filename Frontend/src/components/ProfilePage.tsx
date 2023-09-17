interface ProfilePageProps {
  profileImageObjURL: string;
  userName: string;
  email: string;
  isInEditMode: boolean;

  setProfileImage: (val: any) => void;
  soundcloudURL: string;
  editsoundcloudURL: (event: React.ChangeEvent<HTMLInputElement>) => void;
  bandcampURL: string;
  editBandcampURL: (event: React.ChangeEvent<HTMLInputElement>) => void;
  spotifyURL: string;
  editSpotifyURL: (event: React.ChangeEvent<HTMLInputElement>) => void;
  youtubeURL: string;
  editYoutubeURL: (event: React.ChangeEvent<HTMLInputElement>) => void;
  twitterURL: string;
  editTwitterURL: (event: React.ChangeEvent<HTMLInputElement>) => void;
  facebookURL: string;
  editFacebookURL: (event: React.ChangeEvent<HTMLInputElement>) => void;
  instagramURL: string;
  editInstagramURL: (event: React.ChangeEvent<HTMLInputElement>) => void;
  visibility: string;
  editVisibility: (event: React.ChangeEvent<HTMLSelectElement>) => void;

  toggleEditMode: () => Promise<void>;
  deleteProfile: () => Promise<void>;

  error: string;
  message: string;
}

const ProfilePage = ({
  profileImageObjURL,
  userName,
  email,
  isInEditMode,

  setProfileImage,
  soundcloudURL,
  editsoundcloudURL,
  bandcampURL,
  editBandcampURL,
  spotifyURL,
  editSpotifyURL,
  youtubeURL,
  editYoutubeURL,
  twitterURL,
  editTwitterURL,
  facebookURL,
  editFacebookURL,
  instagramURL,
  editInstagramURL,
  visibility,
  editVisibility,

  toggleEditMode,
  deleteProfile,

  error,
  message,
}: ProfilePageProps) => {
  return (
    <div className="w-12/12 h-max">
      <h3 className="w-max ml-auto mr-auto p-2 text-4xl font-bold">{`${
        userName === "null" ? email : userName
      }'s Profile`}</h3>
      <div className="w-5/12 h-max ml-auto mr-auto overflow-hidden">
        {/* Temp Image */}
        <img
          className="w-64 ml-auto mr-auto rounded-3xl object-cover"
          src={profileImageObjURL}
          id="profileImage"
        ></img>

        {isInEditMode && (
          <>
            <div className="w-max ml-auto mr-auto mt-3">
              <span
                className="material-symbols-outlined ml-auto mr-auto"
                onClick={() => {
                  let temp = document.getElementById("hiddenImageUpload");
                  temp?.click();
                }}
              >
                file_open
              </span>
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              id="hiddenImageUpload"
              onChange={(e) => {
                setProfileImage(e.target.files![0]);
              }}
            />
          </>
        )}
      </div>
      <div className="overflow-hidden w-max ml-auto mr-auto mt-3 mb-3 border-prodSecondary border-t-2 border-b-2">
        <div className="w-max mr-auto">
          <h1 className="text-xl">Email: {email} </h1>
        </div>
        <div className="w-max  mr-auto ">
          <h1 className="text-xl">
            User Name: {userName === "null" ? "N/A" : userName}{" "}
          </h1>
        </div>
        <div className="w-max  mr-auto ">
          <h1 className="text-xl">
            soundcloud URL: {!isInEditMode && soundcloudURL}
            {isInEditMode && (
              <input
                className="p-1"
                type="text"
                value={soundcloudURL}
                onChange={editsoundcloudURL}
              ></input>
            )}
          </h1>
        </div>
        <div className="w-max  mr-auto ">
          <h1 className="text-xl">
            Bandcamp URL: {!isInEditMode && bandcampURL}{" "}
            {isInEditMode && (
              <input
                className="p-1"
                type="text"
                value={bandcampURL}
                onChange={editBandcampURL}
              ></input>
            )}
          </h1>
        </div>
        <div className="w-max  mr-auto ">
          <h1 className="text-xl">
            Spotify URL: {!isInEditMode && spotifyURL}{" "}
            {isInEditMode && (
              <input
                className="p-1"
                type="text"
                value={spotifyURL}
                onChange={editSpotifyURL}
              ></input>
            )}
          </h1>
        </div>
        <div className="w-max  mr-auto ">
          <h1 className="text-xl">
            Youtube URL: {!isInEditMode && youtubeURL}{" "}
            {isInEditMode && (
              <input
                className="p-1"
                type="text"
                value={youtubeURL}
                onChange={editYoutubeURL}
              ></input>
            )}
          </h1>
        </div>
        <div className="w-max  mr-auto ">
          <h1 className="text-xl">
            Twitter URL: {!isInEditMode && twitterURL}{" "}
            {isInEditMode && (
              <input
                className="p-1"
                type="text"
                value={twitterURL}
                onChange={editTwitterURL}
              ></input>
            )}
          </h1>
        </div>
        <div className="w-max  mr-auto ">
          <h1 className="text-xl">
            Facebook URL: {!isInEditMode && facebookURL}{" "}
            {isInEditMode && (
              <input
                className="p-1"
                type="text"
                value={facebookURL}
                onChange={editFacebookURL}
              ></input>
            )}
          </h1>
        </div>
        <div className="w-max  mr-auto ">
          <h1 className="text-xl">
            Instagram URL: {!isInEditMode && instagramURL}{" "}
            {isInEditMode && (
              <input
                className="p-1"
                type="text"
                value={instagramURL}
                onChange={editInstagramURL}
              ></input>
            )}
          </h1>
        </div>
        <div className="w-max  mr-auto ">
          <h1 className="text-xl">
            Visibility: {!isInEditMode && visibility}{" "}
            {isInEditMode && (
              <select
                className="p-1"
                value={visibility}
                onChange={editVisibility}
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
                <option value="FriendsOnly">FriendsOnly</option>
              </select>
            )}
          </h1>
        </div>
      </div>
      <div className="w-10/12 ml-auto mr-auto mb-3 flex justify-around">
        <button onClick={toggleEditMode} className="btn">
          {isInEditMode ? "Save profile" : "Edit Profile"}
        </button>
        <button onClick={deleteProfile} className="btn">
          Delete profile
        </button>
      </div>
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default ProfilePage;
