function PersonalInfo(props) {
    return (
        <div className="PersonalInfo">
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