import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.PureComponent {
    render() {
        const props = this.props;

        const key = typeof props.children === 'string'
            ? props.children
            : props.children.toString();

        return (
            <span>
                <span className="label label-primary"
                      onClick={props.onClick}
                      key={key}>
                      {props.children}&nbsp;
                      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </span>&nbsp;
            </span>
        );
    }
}

Tag.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Tag;