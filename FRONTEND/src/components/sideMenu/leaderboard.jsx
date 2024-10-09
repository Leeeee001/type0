import { useEffect, useState } from "react";
import Modal from "../UI/modal";
import { API } from "../../utils/const";

function LeaderBoard(props) {
    const [topTenList, setTopTenList] = useState([]); // [speed, {user,accuracy}]
    async function getTopTen() {
        const response = await fetch(`${API}/top5`);
        const result = await response.json();
        let res = Object.entries(result[0]);
        res.pop();
        setTopTenList(res.reverse());
    }
    if (topTenList.length === 0) {
        getTopTen();
    }

    return (
        <Modal label="Global Leaderboard" closeModal={props.closeLeaderBoard}>
            <header className="rankItem">
                <label>User</label>
                <label>speed</label>
                <label>accuracy</label>
            </header>
            {topTenList.map((ele) => (
                <div className="rankItem" key={ele[0]}>
                    <div>{ele[1].user}</div>
                    <div>{ele[0]}WPM</div>
                    <div>{ele[1].accuracy}%</div>
                </div>
            ))}
        </Modal>
    );
}

export default LeaderBoard;
