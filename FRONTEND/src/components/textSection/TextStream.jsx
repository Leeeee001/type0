import React from "react";
function TextStream(props) {

    let textStream = props.textStream;
    let wordEliment = [];
    let paragraph = [];
    for (let i = 0; i < textStream.length; i++) {
        let temp = (
            <div className={`ltr${i} letter`} key={i}>
                {textStream[i]}
            </div>
        );
        wordEliment.push(temp);
        if (textStream[i] == " ") {
            paragraph.push(
                <div className="word" key={i}>
                    {wordEliment}
                </div>
            );
            wordEliment = [];
        }
    }

    return (
        <section className="textField" id="test">
            {paragraph.map((ele) => ele)}
            <div className="debug"> </div>
        </section>
    );
}
export default React.memo(TextStream)
