import { useEffect, useState } from "react";
import InputChecker from "./InputChecker";
import TextStream from "./TextStream";

function TextSection(props) {
  const [textStream, setTextStream] = useState("loading.......  ");
  const randDigit = (Math.random() * 5).toFixed();
  const API = "https://type0-mca-011-mca-2022-15.onrender.com/para";
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
