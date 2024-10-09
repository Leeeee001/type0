import { useState } from "react";
import UserName from "./userName";
import { API } from "../../utils/const";

function LocalHighScore(props) {
    // const [topTenObj, setTopTenObj] = useState([]);
    // let topTenObj;
    const [getUser, setGetUser] = useState(false);
    const [globalLeaderBoard, setGlobalLeaderBoard] = useState({});
    function closeUserNameModal() {
        setGetUser(false);
    }

    const [highScore, setHighScore] = useState(
        localStorage.getItem("highScore")
            ? localStorage.getItem("highScore")
            : 0
    );
    const [highestAccu, setHighestAccu] = useState(
        localStorage.getItem("highestAccu")
            ? localStorage.getItem("highestAccu")
            : 0
    );
    async function globalHighest(curr) {
        // const response = await fetch(
        //   "https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/leaderBoard.json"
        // );
        // const result = await response.json();
        const response = await fetch(`${API}/top5`);
        let data = await response.json();
        delete data[0]["_id"];
        let result = data[0];
        setGlobalLeaderBoard(result);
        const minSpeed = Object.keys(result).reduce((acc, curr) => {
            if (acc > curr) {
                return curr;
            } else {
                return acc;
            }
        }, 1000);
        if (minSpeed < curr) {
            setGetUser(true);
        }
    }
    //globalHighest(40)
    if (props.totalLetters > 500 && highScore < props.speed) {
        globalHighest(props.speed);
        setHighScore(props.speed);
        setHighestAccu(props.accuracy);
        localStorage.setItem("highestAccu", props.accuracy);
        localStorage.setItem("highScore", props.speed);
    }

    return (
        <>
            <div
                style={{ height: "fit-content" }}
                title="type atleast 700 letters to register a highscore"
            >{`highScore:${highScore}, ${highestAccu}%`}</div>
            {getUser && (
                <UserName
                    previousLeaderboard={globalLeaderBoard}
                    speed={props.speed}
                    accuracy={props.accuracy}
                    closeUserNameModal={closeUserNameModal}
                />
            )}
        </>
    );
}

export default LocalHighScore;
