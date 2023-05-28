import React, { Component } from "react";
import { BtnOpenModal } from "./BtnOpenModal/BtnOpenModal";
import { Modal } from "Modal/Modal";

export class App extends Component {
  state = {
    showModal : false,
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render () {
    const { showModal } = this.state;
    return (
      <div>
        <BtnOpenModal onClick={this.toggleModal}>Open modal</BtnOpenModal>
        {showModal && <Modal onClose={this.toggleModal}>
          <h1>Modal is open</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea vero nulla, itaque velit dolor quia similique. Et minima nulla voluptatem laudantium beatae nobis, voluptatum fugit ex ducimus eius officia.</p> 
          <BtnOpenModal onClick={this.toggleModal}>Close modal</BtnOpenModal> 
        </Modal>}
      </div>
    );
  }
}
