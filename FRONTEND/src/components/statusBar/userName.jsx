import { useState } from "react";

function UserName(props) {
    const [textInput, setTextInput] = useState("");
    const API = "https://type0.onrender.com/top5";
    async function updateGlobalLeader(e) {
        const updatedLeaderBoard = props.previousLeaderboard;
        const minSpeed = Object.keys(updatedLeaderBoard).reduce((acc, curr) => {
            if (acc > curr) {
                return curr;
            } else {
                return acc;
            }
        }, 1000);
        delete updatedLeaderBoard[minSpeed];
        updatedLeaderBoard[(+props.speed).toFixed()] = {
            accuracy: +props.accuracy,
            user: textInput,
        };
        // const response = await fetch(
        //   "https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/leaderBoard.json",
        //   {
        //     method: "PUT",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(updatedLeaderBoard),
        //   }
        // );
        const response = await fetch(API, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedLeaderBoard),
        });
        props.closeUserNameModal();
    }
    return (
        <>
            <div className="overlay" onClick={() => {}}>
                <div
                    className="modal leaderboard"
                    onClick={(e) => e.stopPropagation()}
                >
                    <label>enter you name</label>
                    <input
                        onChange={(e) => setTextInput(e.target.value)}
                        className="nameInput"
                        type="text"
                    ></input>
                    <button onClick={updateGlobalLeader}>submit!</button>
                    <button onClick={props.closeUserNameModal}>cancel</button>
                </div>
            </div>
        </>
    );
}

export default UserName;
