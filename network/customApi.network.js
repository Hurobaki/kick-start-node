const fetch = require('node-fetch');
const { formatNetworkResponse } = require('./formatNetworkResponse');

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const customApiNetwork = {
    customApi: () => ({
        get: async (options = null) => {
            const response = await fetch(API_URL, { options });
            return ({ data, status } = await formatNetworkResponse(response));
        },
        set: 'SET from CustomApi network'
    })
};

module.exports = customApiNetwork;
