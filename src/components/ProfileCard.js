import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Stats from "./Stats";

function ProfileCard() {
    return (
        <div className="ProfileCard">
            <div className="ProfileCard-upper">
                <Avatar />
            </div>
            <div className="ProfileCard-lower">
                <PersonalInfo name="Victor Crest" age="26" location="London" />
                <hr></hr>
                <Stats />
            </div>
        </div>
    );
}

export default ProfileCard;