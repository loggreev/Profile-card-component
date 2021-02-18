import StatsItem from "./StatsItem";

function Stats() {
    return (
        <div id="Stats">
            <StatsItem number="80k" tag="Followers" />
            <StatsItem number="803k" tag="Likes" />
            <StatsItem number="1.4k" tag="Photos" />
        </div>
    )
}

export default Stats;