import React, {Component} from 'react';
import BoardItem from "../../components/BoardItem/BoardItem";
import AddForm from "../../components/AddForm/AddForm";
import Modal from "../../components/UI/Modal/Modal";

class Board extends Component {
    state = {
        showModal: false
    };

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    render() {
        return (
            <div className="container py-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Board</h2>
                    <button onClick={this.toggleModal} className="btn btn-info">Add new item</button>
                </div>

                <BoardItem/>
                <BoardItem/>


                <Modal
                    show={this.state.showModal}
                    close={this.toggleModal}
                >
                    <AddForm/>
                </Modal>
            </div>
        );
    }
}

export default Board;
