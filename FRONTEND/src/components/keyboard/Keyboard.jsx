const Keyboard = (props) => {
    const top = ["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace"];
    const qwer = [
        "Tab",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "[",
        "]",
        "\\",
    ];
    const asdf = [
        "CapsLock",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ";",
        "'",
        "Enter",
    ];
    const zxcv = [
        "Shift1",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "/",
        "Shift2",
    ];
    const bottom = [
        "Ctrl1",
        "Fn",
        "Wn",
        "Alt1",
        "Space bar",
        "Alt2",
        "Ctrl2",
        "Fn2",
    ];
    return (
        <div
            className="keyboard"
            style={{
                color: props.color,
                backgroundColor: props.backgroundColor,
                borderColor: props.color,
            }}
        >
            <div className="first">
                {top.map((ele) => {
                    return (
                        <div
                            className={`${ele} key`}
                            onClick={(e) => {
                                console.log(ele);
                            }}
                            key={ele}
                        >
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="qwer">
                {qwer.map((ele) => {
                    return (
                        <div className={`${ele} key`} key={ele}>
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="asdf">
                {asdf.map((ele) => {
                    return (
                        <div className={`${ele} key`} key={ele}>
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="zxcv">
                {zxcv.map((ele) => {
                    return (
                        <div className={`${ele} key`} key={ele}>
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="bottom">
                {bottom.map((ele) => {
                    return (
                        <div className={`${ele} key`} key={ele}>
                            {ele}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Keyboard;
