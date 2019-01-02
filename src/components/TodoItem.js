import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import TextSubmitter from './TextSubmitter';

class TodoItem extends React.PureComponent {
    render() {
        const props = this.props;
        const tags = props.tags.map(tagName => {
            return (
                <Tag key={tagName} onClick={props.onRemoveTag.bind(null, tagName)}>
                    {tagName}
                </Tag>
            );
        });

        const text = props.done
            ? <del>{props.children}</del>
            : <strong>{props.children}</strong>;

        let listItemClasses = 'list-group-item';

        if (props.done) listItemClasses += ' disabled';

        const markDoneButton = props.done
            ? null
            : <button className="btn btn-primary" onClick={props.onMarkDone}>Mark done</button>;

        const addTagForm = <TextSubmitter onSubmit={props.onAddTag} text="Add Tag"/>;

        return (
            <li className={listItemClasses}>
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="list-group-item-heading">{text} {tags}</h4>
                    </div>
                    <div className="col-md-4 text-right">
                        <p>
                            {markDoneButton}&nbsp;
                            <button className="btn btn-danger"
                                    onClick={props.onDelete}>
                                Delete
                            </button>
                        </p>
                        {addTagForm}
                    </div>
                </div>
            </li>
        );
    }
}

TodoItem.propTypes = {
    children: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    done: PropTypes.bool.isRequired,
    onAddTag: PropTypes.func.isRequired,
    onRemoveTag: PropTypes.func.isRequired,
    onMarkDone: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
