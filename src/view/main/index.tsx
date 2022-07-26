import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { OnChangeType } from "../../types";

import onKeyDownEnter from "../../func/onKeyDownEnter";

const Main: React.FC = function () {
    const randomNum = Math.floor(Math.random() * 10);
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
    const [rain, setRain] = useState(["10000", "22222", "3"]);
    // 첫번째 단어 삽입.
    // 1초마다 80px 다운.
    // 반정도 내려오면 다음 단어 다운.
    // 데드라인 충돌시 하트 삭제. 최근단어 삭제. 큐형식.
    console.log(Menu[randomNum]);
    const history = useHistory();
    const [heart, setHeart] = useState("❤️ ❤️ ❤️");
    const [inputs, setInputs] = useState({ material: "" });
    const [stack, setStack] = useState([undefined, "", ""]);
    const [displaySwitch, setDisplaySwitch] = useState("block");
    const onChange: OnChangeType = function (e, state, setState) {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    console.log(inputs);

    // 1초마다 떨어지는 함수.
    // + 데드라인 오버시 hide. display -> none.
    const dropDownMenu = function () {
        let routine = setInterval(() => {
            setDownMenuNUm((downMenuNum) => downMenuNum + 97);
        }, 1000);
        setTimeout(() => {
            clearInterval(routine);
            console.log("정지");
        }, 5000);
        setTimeout(() => {
            setDisplaySwitch("none");
        }, 6000);
    };

    useEffect(() => {
        dropDownMenu();
    }, []);

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
                        {Menu[randomNum]}
                    </p>
                    {/* <span
                        className="raining"
                    >
                        {rain[0]}
                    </span> */}
                </div>
                <ul className="stack">
                    LIST
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
            <button onClick={() => history.goBack()}>뒤로가기</button>
        </div>
    );
};

export default Main;
