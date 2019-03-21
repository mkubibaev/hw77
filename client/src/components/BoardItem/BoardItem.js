import React from 'react';
import {apiURL} from "../../constants";

const BoardItem = props => {
    return (
        <div className="board-item">
            {props.image !== 'null'
                ? <div className="board-item__img">
                    <img src={`${apiURL}/uploads/${props.image}`} alt=""/>
                </div>
                : null
            }
            <div className="board-item__text">
                <p>{props.message}</p>
                <span className="text-secondary">{props.author}</span>
            </div>
        </div>
    );
};

export default BoardItem;
