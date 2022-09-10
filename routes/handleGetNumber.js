'use strict';

module.exports = (req, res, next)=>{
    
    const {num} = req.query;
    const temp = parseInt(num)**2;
    res.send(`{num: ${temp.toString()}}`);
}