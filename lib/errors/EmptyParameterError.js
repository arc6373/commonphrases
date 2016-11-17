'use strict';

const AbstractError = require('./AbstractError');

/**
 * Indicates that one or more required parameters are missing
 */
class EmptyParameterError extends AbstractError {
    constructor () {
        super('Provided an empty parameter!');
    }
}

module.exports = EmptyParameterError;