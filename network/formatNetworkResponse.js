module.exports.formatNetworkResponse = async response => ({
    data: await response.json(),
    status: response.status,
    error: response.error
});
