import React, {Component} from 'react';

class AddForm extends Component {
    state = {
        message: '',
        author: '',
        image: null
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0],
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.onSubmit(formData).then(this.props.refreshList);
    };

    render() {
        return (
            <form onSubmit={this.submitFormHandler}>
                <div className="form-group">
                    <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Message"
                        name="message"
                        value={this.state.message}
                        onChange={this.inputChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Author"
                        name="author"
                        value={this.state.author}
                        onChange={this.inputChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="file"
                        className="form-control-file"
                        name="image"
                        onChange={this.fileChangeHandler}
                    />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        );
    }
}

export default AddForm;
