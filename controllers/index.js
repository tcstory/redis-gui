let path = require('path');

exports.index = function (req, res) {
    res.sendFile(path.join('../public/index.html'));
};