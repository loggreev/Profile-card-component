function StatsItem(props) {
    return (
        <div className="StatsItem">
            <p className="stats-number">
                {props.number}
            </p>
            <p className="stats-tag">
                {props.tag}
            </p>
        </div>
    )
}

export default StatsItem;