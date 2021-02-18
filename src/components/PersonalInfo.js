function PersonalInfo(props) {
    return (
        <div id="PersonalInfo">
            <p>
                <span className="name">{props.name}</span>
                {props.age}
            </p>
            <p className="location">
                {props.location}
            </p>
        </div>
    )
}

export default PersonalInfo;