const APIGateway = ({
    body,
    method,
    path = '',
    queryStringString,
    pathParameters,
    headers = {
        'Content-Type': 'application/json'
    },
    stageVariables = null,
    userIdentity = null
}) => {
    const request = {
        body: body ? JSON.stringify(body) : null,
        headers: headers,
        httpMethod: method,
        isBase64Encoded: false,
        path,
        pathParameters: pathParameters || null,
        queryStringParameters: queryStringString || null,
        multiValueQueryStringParameters: null,
        stageVariables,
        requestContext: {
            httpMethod: method,
            identity: userIdentity || null,
            path,
            stage: '',
            requestId: '',
            requestTimeEpoch: 3,
            resourceId: '',
            resourcePath: '',
        },
        resource: '',
    };
    return request;
};

module.exports = {
    APIGateway
};
