import React from 'react';

const Modal = props => {
    let modal = null;

    if (props.show) {
        modal = (
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add new board item</h5>
                            <button
                                type="button"
                                className="close"
                                onClick={props.close}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return modal;
};

export default Modal;
