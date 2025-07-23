import "./UserInfo.css";
function UserInfo() {
  let user = {
    name: "John Doe",
    about:
      "Frontend React Developer and UI/UX Designer with 10+ years of experience.",
    profileImg:
      "https://images.pexels.com/photos/6150379/pexels-photo-6150379.jpeg",
    profileUrl: "https://mohammedaeraf.github.io/profile/",
  };

  return (
    <div className="card">
      <img src={user.profileImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.about}</p>
        <a href={user.profileUrl} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
export default UserInfo;
