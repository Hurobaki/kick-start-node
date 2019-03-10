const { Network } = require('../network');

module.exports.getCutomApi = async () => await Network.customApi().get();
module.exports.setCustomApi = () => Network.customApi().set;
