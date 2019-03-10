const path = require('path');

const config = {
    serverPort: process.env.PORT || 3000,
    uploadFolder: path.join(__dirname, '..', 'uploads')
};

module.exports = config;
