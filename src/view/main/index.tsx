import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { OnChangeType } from "../../types";
import recipe from "../../recipe.json";

import onKeyDownEnter from "../../func/onKeyDownEnter";
// 7/27 할 일.⬇️
// 시작 버튼 추가.

const Main: React.FC = function () {
    console.log(recipe.vanillaLatte);
    const randomNum = Math.floor(Math.random() * 10);
    const [rNum, setRnum] = useState(0);
    const Menu = [
        "아메리카노(I)",
        "아메리카노(H)",
        "카페라떼(I)",
        "카페라떼(H)",
        "바닐라라떼(I)",
        "헤이즐넛라떼(I)",
        "돌체라떼(I)",
        "카라멜마끼야또(I)",
        "카페모카(I)",
        "흑당카페라떼",
    ];
    const [downMenuNum, setDownMenuNUm] = useState(0);

    // console.log(Menu[randomNum]);
    const history = useHistory();
    const [heart, setHeart] = useState("❤️ ❤️ ❤️");
    const [inputs, setInputs] = useState({ material: "" });
    const [stack, setStack] = useState([undefined, "", ""]);
    const [displaySwitch, setDisplaySwitch] = useState("block");
    const [timeCount, setTimeCount] = useState(3);
    const [countSwitch, setCountSwitch] = useState("none");
    const onChange: OnChangeType = function (e, state, setState) {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    // console.log(inputs);

    const dropDownMenu = function () {
        setTimeCount(3);
        setCountSwitch("block");
        let count = setInterval(() => {
            setTimeCount((timeCount) => timeCount - 1);
        }, 1000);
        setTimeout(() => {
            setCountSwitch("none");
            clearInterval(count);
            setDownMenuNUm(0);
            if (displaySwitch === "none") {
                setDisplaySwitch("block");
            }
            setRnum(randomNum);
            let routine = setInterval(() => {
                setDownMenuNUm((downMenuNum) => downMenuNum + 53.8);
            }, 1000);
            setTimeout(() => {
                clearInterval(routine);
                console.log("정지");
            }, 9000);
            setTimeout(() => {
                setDisplaySwitch("none");
            }, 10000);
        }, 3000);
    };

    const clearMenu = function () {
        // 리스트 내용이 레시피에 부합하면
        // array pop
    };

    // useEffect(() => {
    //     dropDownMenu();
    // }, []);

    return (
        <div className="main">
            <p>main view</p>
            <section className="game-view">
                <header>
                    <span>stage 1</span>
                    <span>score: 0</span>
                    <span>{heart}</span>
                </header>
                <div className="block-down-field">
                    <p
                        className="block"
                        style={{
                            top: `${downMenuNum}px`,
                            display: displaySwitch,
                        }}
                    >
                        {Menu[rNum]}
                    </p>
                    {countSwitch ? (
                        <p
                            style={{ display: countSwitch }}
                            className="time-count"
                        >
                            {timeCount}
                        </p>
                    ) : null}
                </div>
                <ul className="stack">
                    ⭐️LIST⭐️
                    <li>{stack[0]}</li>
                    <li>{stack[1]}</li>
                    <li>{stack[2]}</li>
                </ul>
                <footer>
                    {/* 입력시 뒤에 숫자를 붙임 얼음100, 물200 샷1  */}
                    <input
                        onChange={(e) => onChange(e, inputs, setInputs)}
                        name="material"
                        value={inputs.material}
                        onKeyDown={(e) =>
                            onKeyDownEnter(
                                e,
                                inputs,
                                setInputs,
                                stack,
                                setStack
                            )
                        }
                        type="text"
                        placeholder="재료를 입력하세요"
                    />
                    <button>push</button>
                </footer>
            </section>
            <button onClick={() => dropDownMenu()}>시작</button>
            <button>초기화</button>
            <button onClick={() => history.goBack()}>뒤로가기</button>
        </div>
    );
};

export default Main;
