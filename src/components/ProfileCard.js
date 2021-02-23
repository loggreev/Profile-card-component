import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Stats from "./Stats";

function ProfileCard() {
    return (
        <div className="ProfileCard">
            <div className="ProfileCard-upper">
                <Avatar />
            </div>
            <div className="ProfileCard-middle">
                <PersonalInfo name="Victor Crest" age="26" location="London" />
            </div>
            <div className="ProfileCard-lower">
                <Stats />
            </div>
        </div>
    );
}

export default ProfileCard;