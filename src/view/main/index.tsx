import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./style.scss";
import { OnChangeType, KeyDownType } from "../../types";

const Main: React.FC = function () {
    const history = useHistory();
    const [heart, setHeart] = useState("❤️");
    const [inputs, setInputs] = useState({ name: "" });
    const [stack, setStack] = useState("");
    const onChange: OnChangeType = function (e, state, setState) {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    console.log(inputs);
    const onKeyDownEnter: KeyDownType = function (e) {
        // console.log(e.code);
        if (e.code === "Enter") {
            setStack(inputs.name);
            setInputs({ name: "" });
        }
    };
    return (
        <div className="main">
            <p>main view</p>
            <section className="game-view">
                <header>
                    <span>stage 1</span>
                    <span>score: 0</span>
                    <span>{heart}</span>
                </header>
                <div className="block-down">커피 쏟아짐</div>
                <ul className="stack">
                    stack
                    <li>{stack}</li>
                    <li></li>
                    <li></li>
                </ul>
                <footer>
                    <input
                        onChange={(e) => onChange(e, inputs, setInputs)}
                        name="name"
                        value={inputs.name}
                        onKeyDown={onKeyDownEnter}
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
