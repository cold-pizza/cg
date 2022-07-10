import React from "react";

export type OnChangeType = (
    e: React.ChangeEnvent<HTMLInputElement>,
    state: null | {},
    setState: any
) => void;

export type KeyDownType = (e: React.KeyboardEvent) => void;
