module.exports = function (err, req, res, next) {
    let statusCode = 500;
    let errArr = [];

    switch (err.name){
        case "SequelizeUniqueConstraintError":
        case 'SequelizeValidationError':
            statusCode = 400;
            err.errors.forEach(errData => {
                errArr.push(errData.message)
            })
            break;
        case 'JsonWebTokenError':
            statusCode = 400;
            errArr.push('Token invalid!');
            break;
        default:
            let message = err.msg || 'Internal Server Error'
            errArr.push(message);
            statusCode = err.status || statusCode
            break;
    }

    res.status(statusCode).json(errArr.toString())
}