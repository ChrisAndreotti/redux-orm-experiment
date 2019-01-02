import React from 'react';
import PropTypes from 'prop-types';

class TextSubmitter extends React.PureComponent {
    render() {
        const props = this.props;
        let inputRef;

        const onClick = () => props.onSubmit(inputRef.value);

        return (
            <div className="form-inline">
                <div className="form-group">
                    <input className="form-control" type="text" ref={el => inputRef = el}/>
                    <button className="btn btn-default" onClick={onClick}>Add Tag</button>
                </div>
            </div>
        );
    }
}

TextSubmitter.propTypes = {
    text: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default TextSubmitter;
