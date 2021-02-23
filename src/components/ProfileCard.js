import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Stats from "./Stats";

function ProfileCard(props) {
    return (
        <div className="ProfileCard">
            <div className="ProfileCard-upper">
                <Avatar avatar={props.avatar} />
            </div>
            <div className="ProfileCard-middle">
                <PersonalInfo {...props.personalInfo} />
            </div>
            <div className="ProfileCard-lower">
                <Stats stats={props.stats} />
            </div>
        </div>
    );
}

export default ProfileCard;