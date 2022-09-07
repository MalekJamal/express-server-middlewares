'use strict';

module.exports = (num) => {
    return (req, res, next) => {
        
        if (typeof (num) === 'number') {
            res.json({num: num*num});
            next();
        } else {
            next(`${num} is not number`);
        }
    }
}