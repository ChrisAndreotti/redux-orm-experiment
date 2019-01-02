import React from 'react';
import PropTypes from 'prop-types';

class AddTodoForm extends React.PureComponent {
    render() {
        const props = this.props;
        let textRef;
        let tagsRef;

        const onSubmit = () => {
            props.onSubmit({
                text: textRef.value,
                tags: tagsRef.value,
            });
        };

        return (
            <div>
                <div className="form-group">
                    <label>Name</label>&nbsp;
                    <input className="form-control"
                           type="text"
                           ref={el => textRef = el}
                           placeholder="Todo Name"/>
                    &nbsp;
                </div>
                <div className="form-group">
                    <label>Tags</label>&nbsp;
                    <input className="form-control"
                           type="text"
                           ref={el => tagsRef = el}
                           placeholder="urgent, personal, work"/>
                    &nbsp;
                </div>
                <button className="btn btn-primary" onClick={onSubmit}>Add Todo</button>
            </div>
        );
    }
}

AddTodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default AddTodoForm;
