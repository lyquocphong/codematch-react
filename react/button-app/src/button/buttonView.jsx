import React from "react";

const ButtonView = props => {
    const {
        isRed,
        onButtonClick
    } = props;

    const style = {
        backgroundColor: isRed ? "red" : "green"
    };

    return (
        <form>
            <input
                style={style}
                type="button"
                value="Click me!"
                onClick={onButtonClick}
            />
        </form>
    );
};

export default ButtonView;
