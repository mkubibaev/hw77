import React, {Component} from 'react';
import BoardItem from "../../components/BoardItem/BoardItem";
import AddForm from "../../components/AddForm/AddForm";
import Modal from "../../components/UI/Modal/Modal";
import {connect} from "react-redux";
import {createBoardItem, fetchBoard, toggleModal} from "../../store/actions";

class Board extends Component {

    componentDidMount() {
        this.props.fetchBoard();
    }

    render() {
        return (
            <div className="container py-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Board</h2>
                    <button onClick={this.props.toggleModal} className="btn btn-info">Add new item</button>
                </div>
                {
                    this.props.boardItems.map(item => (
                        <BoardItem
                            key={item.id}
                            message={item.message}
                            author={item.author}
                            image={item.image}
                        />
                    ))
                }

                <Modal
                    show={this.props.showModal}
                    close={this.props.toggleModal}
                >
                    <AddForm
                        onSubmit={this.props.createBoardItem}
                        refreshList={this.props.fetchBoard}
                    />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    boardItems: state.boardItems,
    showModal: state.showModal
});

const mapDispatchToProps = dispatch => ({
    fetchBoard: () => dispatch(fetchBoard()),
    createBoardItem: boardItem => dispatch(createBoardItem(boardItem)),
    toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
