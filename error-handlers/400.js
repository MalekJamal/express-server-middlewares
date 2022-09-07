'use strict';

module.exports = (req, res, next) => {
    res.status(404).json({
        code_error: 404,
        message: `Page Not Found: error`
    });
}