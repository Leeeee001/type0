import { useState } from "react";
import Modal from "../UI/modal";

const rootEle = document.querySelector(":root");
rootEle.style.setProperty(
    "--visitedLetter",
    localStorage.getItem("visitedLetter")
);
rootEle.style.setProperty(
    "--unvisitedLetter",
    localStorage.getItem("unvisitedLetter")
);
rootEle.style.setProperty(
    "--backgroundColor",
    localStorage.getItem("backgroundColor")
);

function Settings(props) {
    console.log("theme rerendered");
    const [visitedLetter, setVisitedLetter] = useState(
        localStorage.getItem("visitedLetter")
            ? localStorage.getItem("visitedLetter")
            : "#808080"
    );
    const [unvisitedLetter, setUnvisitedLetter] = useState(
        localStorage.getItem("unvisitedLetter")
            ? localStorage.getItem("unvisitedLetter")
            : "#ffffff"
    );
    const [backgroundColor, setBackgroundColor] = useState(
        localStorage.getItem("backgroundColor")
            ? localStorage.getItem("backgroundColor")
            : "#000000"
    );
    let themeLst = [false, false, false, false];
    if (localStorage.hasOwnProperty("currThemeChecked")) {
        themeLst[localStorage.getItem("currThemeChecked") - 1] = true;
    } else {
        themeLst[0] = true;
        localStorage.setItem("currThemeChecked", 1);
    }
    const [darkThemeCheck, setDarkThemeCheck] = useState(themeLst[0]);
    const [lightThemeCheck, setLightThemeCheck] = useState(themeLst[1]);
    const [matrixThemeCheck, setMatrixThemeCheck] = useState(themeLst[2]);
    const [customThemeCheck, setCustomThemeCheck] = useState(themeLst[3]);
    const presetThemes = [
        setLightThemeCheck,
        setDarkThemeCheck,
        setMatrixThemeCheck,
        setCustomThemeCheck,
    ];
    function changeTheme(visitedColor, unvisitedColor, backgroundColor) {
        rootEle.style.setProperty("--visitedLetter", visitedColor);
        rootEle.style.setProperty("--unvisitedLetter", unvisitedColor);
        rootEle.style.setProperty("--backgroundColor", backgroundColor);
        setVisitedLetter(visitedColor);
        setUnvisitedLetter(unvisitedColor);
        setBackgroundColor(backgroundColor);
        localStorage.setItem("visitedLetter", visitedColor);
        localStorage.setItem("unvisitedLetter", unvisitedColor);
        localStorage.setItem("backgroundColor", backgroundColor);
    }
    function visitedTextColorSelect(e) {
        rootEle.style.setProperty("--visitedLetter", e.target.value);
        setVisitedLetter(e.target.value);
        localStorage.setItem("visitedLetter", e.target.value);
        presetThemes.forEach((ele) => {
            ele(false);
        });
        setCustomThemeCheck(true);
        localStorage.setItem("currThemeChecked", 4);
    }
    function unvisitedTextColorSelect(e) {
        rootEle.style.setProperty("--unvisitedLetter", e.target.value);
        setUnvisitedLetter(e.target.value);
        localStorage.setItem("unvisitedLetter", e.target.value);
        presetThemes.forEach((ele) => {
            ele(false);
        });
        setCustomThemeCheck(true);
        localStorage.setItem("currThemeChecked", 4);
    }
    function backgroundColorSelect(e) {
        rootEle.style.setProperty("--backgroundColor", e.target.value);
        setBackgroundColor(e.target.value);
        localStorage.setItem("backgroundColor", e.target.value);
        presetThemes.forEach((ele) => {
            ele(false);
        });
        setCustomThemeCheck(true);
        localStorage.setItem("currThemeChecked", 4);
    }
    function resetTheme() {
        presetThemes.forEach((ele) => {
            ele(false);
        });
        setDarkThemeCheck(true);
        changeTheme("#808080", "#ffffff", "#000000");
        localStorage.setItem("currThemeChecked", 1);
    }

    function optionDark(e) {
        presetThemes.forEach((ele) => {
            ele(false);
        });
        if (e.target.name === "dark") {
            resetTheme();
            setDarkThemeCheck(true);
            localStorage.setItem("currThemeChecked", 1);
            console.log(1);
        } else if (e.target.name === "light") {
            localStorage.setItem("currThemeChecked", 2);
            setLightThemeCheck(true);
            changeTheme("#808080", "#000000", "#ffffff");

            console.log(2);
        } else if (e.target.name === "matrix") {
            changeTheme("#660000", "#0A8F00", "#000000");
            setMatrixThemeCheck(true);
            localStorage.setItem("currThemeChecked", 3);
        } else if (e.target.name === "custom") {
            setCustomThemeCheck(true);
            localStorage.setItem("currThemeChecked", 4);
        }
    }
    return (
        <Modal label="Settings" closeModal={props.closeSettings}>
            <span className="themePresetSelectBar">
                <label>theme:</label>
                <label>dark</label>
                <input
                    className="themePresetSelect"
                    name="dark"
                    type="checkbox"
                    checked={darkThemeCheck}
                    onChange={optionDark}
                ></input>
                <label>light</label>
                <input
                    className="themePresetSelect"
                    name="light"
                    type="checkbox"
                    checked={lightThemeCheck}
                    onChange={optionDark}
                ></input>
                <label>matrix</label>
                <input
                    className="themePresetSelect"
                    name="matrix"
                    type="checkbox"
                    checked={matrixThemeCheck}
                    onChange={optionDark}
                ></input>
                <label>custom</label>
                <input
                    className="themePresetSelect"
                    name="custom"
                    type="checkbox"
                    checked={customThemeCheck}
                    onChange={optionDark}
                ></input>
            </span>
            <label>
                visited letter color:{" "}
                <input
                    className="colorInput"
                    type="color"
                    onChange={visitedTextColorSelect}
                    value={visitedLetter}
                ></input>
            </label>

            <label>
                unvisited letter color:{" "}
                <input
                    className="colorInput"
                    type="color"
                    onChange={unvisitedTextColorSelect}
                    value={unvisitedLetter}
                ></input>
            </label>

            <label>
                background color:{" "}
                <input
                    className="colorInput"
                    type="color"
                    onChange={backgroundColorSelect}
                    value={backgroundColor}
                ></input>
            </label>
            <button className="themeResetButton" onClick={resetTheme}>
                reset
            </button>
        </Modal>
    );
}

export default Settings;
