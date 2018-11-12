import React, { Component } from "react";
import ButtonView from "./buttonView";

class ButtonController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRed: false
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
            isRed: !this.state.isRed
        });
    }

    render() {
        return (
            <ButtonView
                isRed={this.state.isRed}
                onButtonClick={this.onButtonClick}
            />
        );
    }
}

export default ButtonController;
