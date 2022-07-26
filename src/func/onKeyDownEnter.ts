import { KeyDownType } from "../types";

const onKeyDownEnter: KeyDownType = function (
    e,
    inputs,
    setInputs,
    stack,
    setStack
) {
    // console.log(e.code);
    if (e.code === "Enter" && inputs.material.length > 1) {
        setInputs({ material: "" });
        for (let i = 0; i < 3; i++) {
            if (stack[i] === stack[i + 1]) {
                console.log("중복되는 재료가 있습니다.");
                setInputs({ material: "" });
            } else {
                if (stack[0] === undefined) {
                    setStack([inputs.material]);
                    setInputs({ material: "" });
                }
                if (stack[1] === undefined || stack[2] === undefined) {
                    setStack([...stack, inputs.material]);
                    setInputs({ material: "" });
                } else {
                    setStack([stack[1], stack[2], inputs.material]);
                }
            }
        }
    }
};

export default onKeyDownEnter;
