'use strict';

const AbstractError = require('./AbstractError');
const _ = require('lodash');

/**
 * Indicates that one or more required parameters are missing
 */
class MissingParametersError extends AbstractError {
    constructor (missingParams) {
        super('Missing required parameters');
        if (_.isString(missingParams)) {
            this.missingParams = [missingParams];
        }
        else if (_.isArray(missingParams) && missingParams.length > 0) {
            this.missingParams = missingParams;
        }
        else {
            throw new Error('missingParams must be a string or nonempty array');
        }
    }
}

module.exports = MissingParametersError;