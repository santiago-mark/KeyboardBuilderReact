import { useParams } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectKeyboardCase } from "../redux/ActionCreators";

const KeyboardCaseDetails = () => {
    const keyboardCase = useSelector((state) => state.keyboardCase)
    const { keyboardCaseID } = useParams();
    const dispatch = useDispatch();
    console.log(keyboardCaseID);

    const fetchKeyboardCaseDetail = async () => {
        dispatch(selectKeyboardCase(keyboardCase))
    };

    return (
        <div>
            <h1>KeyboardCaseDetails</h1>
        </div>
    );
};

export default KeyboardCaseDetails;