const AWS = require('aws-sdk');
class AdaptadorDynamoDB {
    constructor() {
        this.dynamoDB = new AWS.DynamoDB.DocumentClient({});
    }
    async put(params) {
        try {
            await this.dynamoDB.put(params).promise();
            return { success: true, Items: params.Item };
        } catch (error) {
            return { success: false, error };
        }
    }

    async get(params) {
        try {
            const data = await this.dynamoDB.get(params).promise();
            if (!data.Item) {
                return { success: false, error: 'Item not found' };
            }
            return { success: true, Items: data.Item };
        } catch (error) {
            return { success: false, error };
        }
    }

    async delete(params) {
        try {
            const item = await this.dynamoDB.delete(params).promise();
            return { success: true, Items: item };
        } catch (error) {
            return { success: false, error };
        }
    }

    async scan(params) {
        try {
            const data = await this.dynamoDB.scan(params).promise();
            return { success: true, Items: data.Items };
        } catch (error) {
            return { success: false, error };
        }
    }
}

module.exports = AdaptadorDynamoDB;
