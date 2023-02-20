import GithubLogo from "../../assets/svg/github_logo.svg"
const UserCard = ({ userData }) => (
    <div className="user-card">
        <img id="user_profile" src={userData.avatar_url} alt="Profile" />
        <span>
            <h2>{userData.name}</h2>
            <p id="user_login">@{userData.login}</p>
        </span>
        <p>{userData.location}</p>
        <p id="user_bio">{userData.bio}</p>
        <a id="github_button" href={userData.html_url} target="_blank" rel="noreferrer">
            <img src={GithubLogo} alt="" />
            View on GitHub
        </a>
    </div >
)

export default UserCard;
