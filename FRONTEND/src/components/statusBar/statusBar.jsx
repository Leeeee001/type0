import Speed from "./Speed";
import Accuracy from "./Accuracy";
import LocalHighScore from "./localHighScore";
import { useState } from "react";
import Keyboard from "../keyboard/Keyboard";
function StatusBar(props) {
    const [showKb, setShowKb] = useState(true);
    const toggleKbHandler = () => {
        setShowKb(!showKb);
    };

    return (
        // <>
        //     <div className="footerPadding"></div>

        <footer style={showKb ? { height: "30rem" } : {}}>
            <div onClick={toggleKbHandler} className="stats">
                <Speed speed={props.speed}></Speed>
                <Accuracy accuracy={props.accuracy}></Accuracy>
                <LocalHighScore
                    speed={props.speed}
                    accuracy={props.accuracy}
                    totalLetters={props.totalLetters}
                ></LocalHighScore>
            </div>
            <Keyboard />
        </footer>

        // </>
    );
}
export default StatusBar;
