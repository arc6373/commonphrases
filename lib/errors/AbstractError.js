'use strict';

/**
 * An intermediary between Error and custom errors that allows for simpler error class definitions
 */
class AbstractError extends Error {
    constructor (message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        //create the stack trace but filter out the constructors
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AbstractError;