const sendResponse = (params, res) => {
    const { status, data, message } = params;
    const result = `{status: '${status}', data: [${data}], message: '${message}'}`;
    res.send(JSON.stringify(result));
}


module.exports = sendResponse;