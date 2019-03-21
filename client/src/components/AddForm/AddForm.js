import React, {Component} from 'react';

class AddForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Message"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Author"/>
                </div>
                <div className="form-group">
                    <input type="file" className="form-control-file"/>
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        );
    }
}

export default AddForm;
