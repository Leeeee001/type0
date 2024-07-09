import Speed from "./Speed";
import Accuracy from "./Accuracy";
import LocalHighScore from "./localHighScore";
function StatusBar(props) {
    return (
        <>
        <div className="footerPadding"></div>
        <footer>
            <Speed speed={props.speed}></Speed>
            <Accuracy accuracy={props.accuracy}></Accuracy>
            <LocalHighScore
                speed={props.speed}
                accuracy={props.accuracy}
                totalLetters={props.totalLetters}
            ></LocalHighScore>
        </footer>
        </>
    );
}
export default StatusBar;
