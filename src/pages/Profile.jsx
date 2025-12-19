import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>My Profile</h2>

        <div className="profile-info">
          <p><strong>Name:</strong> Archi Kumari</p>
          <p><strong>Email:</strong> archi@email.com</p>
        </div>

        <div className="profile-actions">
          <button>Edit Profile</button>
          <button className="logout">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
