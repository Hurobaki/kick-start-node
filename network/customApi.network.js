const fetch = require('node-fetch');
const { formatNetworkResponse } = require('./formatNetworkResponse');

const customApiNetwork = {
    customApi: () => ({
        get: async (options = null) => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', { options });
            return ({ data, status } = await formatNetworkResponse(response));
        },
        set: 'SET from CustomApi network'
    })
};

module.exports = customApiNetwork;
