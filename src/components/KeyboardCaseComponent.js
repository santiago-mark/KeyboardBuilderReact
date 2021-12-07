import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const KeyboardCaseComponent = () => {
    const keyboardCases  = useSelector((state) => state.keyboardCases);
    const renderKeyboardCases = keyboardCases.map((keyboardCase) => {
        const { id, name,  manufacturer, formType } = keyboardCase;
        return (
            <div className= "ui" key={id}>
                <Link to={`/keyboardCases/${id}`}>
                    <div className ="ui link cards">
                        <div className = "card">
                            <div className="image"></div>
                            <div className="content">
                                <div className="header">
                                    {name}
                                </div>
                                <div>
                                    {manufacturer}
                                </div>
                                <div>
                                    {formType}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });
   
    return <>{renderKeyboardCases} </>
};

export default KeyboardCaseComponent;
