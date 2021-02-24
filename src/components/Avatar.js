function Avatar(props) {
    let avatar = props.avatar;
    if (!avatar) {
        avatar = "https://via.placeholder.com/96";
    }

    return (
        <img src={avatar} className="Avatar" alt="Avatar"></img>
    )
}

export default Avatar;