import React from 'react';
import PropTypes from 'prop-types';

class UserSelector extends React.PureComponent {
    render() {
        const props = this.props;
        let selectRef;

        const onChange = () => {
            const integerId = parseInt(selectRef.value, 10);
            props.onSelect(integerId);
        };

        return (
            <div className="form-group">
                <label>User</label>
                <select className="form-control"
                        onChange={onChange}
                        ref={el => selectRef = el}>
                    {props.children}
                </select>
            </div>
        );
    }
}

UserSelector.propTypes = {
    onSelect: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default UserSelector;
