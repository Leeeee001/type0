import { useEffect, useState } from "react";
import Modal from "../UI/modal";

function LeaderBoard(props) {
    // let topTenList = [1, 2, 3, 4];
    const API = "https://type0.onrender.com/top5";
    const [topTenList, setTopTenList] = useState([]); // [speed, {user,accuracy}]
    async function getTopTen() {
        const response = await fetch(API);
        const result = await response.json();
        let res = Object.entries(result[0]);
        res.pop();
        setTopTenList(res.reverse());
        // const response = await fetch(
        //     "https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/leaderBoard.json"
        // );
        // const result = await response.json();
        // setTopTenList(Object.entries(result).reverse());
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
