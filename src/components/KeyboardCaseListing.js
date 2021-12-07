import React from "react";
import { useSelector } from "react-redux";
import KeyboardCaseComponent from "./KeyboardCaseComponent";

const KeyboardCaseListing = () => {
    const keyboardCases  = useSelector((state) => state.keyboardCases);
    console.log(keyboardCases);
    return (
        <div className= "ui">
            <KeyboardCaseComponent />
        </div>
    );
};

export default KeyboardCaseListing;
