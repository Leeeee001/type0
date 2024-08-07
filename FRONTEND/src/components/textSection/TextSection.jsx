import { useEffect, useState } from "react";
import InputChecker from "./InputChecker";
import TextStream from "./TextStream";

function TextSection(props) {
    const [textStream, setTextStream] = useState(
        "loading.......  the backend server is hosted on render (free tier) so it will take around 50 seconds to spin up for the first time. Should be smooth sailing after that. (happens after 15 minutes of inactivity in in render) "
    );
    const randDigit = (Math.random() * 5).toFixed();
    const API = "https://type0.onrender.com/para";
    async function getParagraph() {
        const response = await fetch(API);
        const data = await response.json();
        setTextStream(data[0][`stream00${randDigit}`]);

        // const result = await fetch(
        //   `https://type0-a8335-default-rtdb.asia-southeast1.firebasedatabase.app/txtStreams/stream00${randDigit}.json`
        // );
        // setTextStream(await result.json());
    }
    useEffect(() => {
        getParagraph();
    }, []);

    return (
        <>
            <TextStream textStream={textStream}></TextStream>
            <InputChecker
                textStream={textStream}
                speedDriller={props.speedDriller}
                highScore={props.highScore}
            ></InputChecker>
        </>
    );
}
export default TextSection;
