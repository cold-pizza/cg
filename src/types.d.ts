import React, { SetStateAction } from "react";

export type OnChangeType = (
    e: React.ChangeEnvent<HTMLInputElement>,
    state: null | {},
    setState: any
) => void;

export type KeyDownType = (
    e: React.KeyboardEvent,
    inputs: { material: string },
    setInputs: SetStateAction,
    stack: (string | undefined)[],
    setStack: SetStateAction
) => void;
