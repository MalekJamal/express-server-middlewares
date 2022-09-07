'use strict';

module.exports = (error, req, res , next)=>{

    res.json({
        code_error: 500,
        message: `Server error: ${error.message || error}`
    })
}