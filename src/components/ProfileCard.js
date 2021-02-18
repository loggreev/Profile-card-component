import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Stats from "./Stats";

function ProfileCard() {
    return (
        <div className="ProfileCard">
            <div className="upper">

            </div>
            <div className="lower">
                <PersonalInfo name="Victor Crest" age="26" location="London" />
                <hr></hr>
                <Stats />
            </div>
            <Avatar />
        </div>
    );
}

export default ProfileCard;