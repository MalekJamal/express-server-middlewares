'use strict';

module.exports = (req, res, next) => {

    const { num } = req.query;
    const regex = /^\d+$/;

    if (regex.test(num)) {
        next();
    } else {
        next(`Your input is not number, enter a valid data`);
    }

}