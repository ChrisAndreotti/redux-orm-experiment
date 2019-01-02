import PropTypes from 'prop-types';
import { Model } from 'redux-orm';

class ValidatingModel extends Model { 
    static _validateProps(props) {
        if (typeof this.propTypes === 'object') {
            const result = PropTypes.checkPropTypes(this.propTypes, props, 'prop', this.modelName);
            if (result instanceof Error) {
                throw result;
            }
        }
    }
  
    static create(props) {
        if (typeof this.defaultProps === 'object') {
            const propsWithDefaults = Object.assign({}, this.defaultProps, props);
            this._validateProps(propsWithDefaults);
            return super.create(propsWithDefaults);
        }
        this._validateProps(props);
        return super.create(props);
    }
  }

  export default ValidatingModel;