import StatsItem from "./StatsItem";

function Stats(props) {
    const itemList = props.stats.map((item, index) =>
        <StatsItem key={index} {...item} />
    );

    return (
        <div className="Stats">
            {itemList}
        </div>
    )
}

export default Stats;