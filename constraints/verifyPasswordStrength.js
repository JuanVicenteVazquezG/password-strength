const zxcvbn = require('zxcvbn');

module.exports = function (password) {
    const { score } = zxcvbn(password);
    if (score < 2) {
        return Promise.reject({
            message: ' El password es muy debil',
            score: score,
        })
    }
    return Promise.resolve({
        message: 'El password  tiene una fortaleza buena',
        score: score,
    });

}