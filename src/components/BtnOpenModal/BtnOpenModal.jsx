import React, { Component } from "react";

export class BtnOpenModal extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        )
    }
}