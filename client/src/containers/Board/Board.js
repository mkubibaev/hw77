import React, {Component} from 'react';
import BoardItem from "../../components/BoardItem/BoardItem";

class Board extends Component {
    render() {
        return (
            <div className="container py-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Board</h2>
                    <button className="btn btn-info">Add new item</button>
                </div>

                <BoardItem/>
                <BoardItem/>

            </div>
        );
    }
}

export default Board;
