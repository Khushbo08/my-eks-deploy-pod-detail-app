const config = {
    // RDS Database Configuration
    db: {
        host: process.env.DB_HOST || 'mydbinstance.czhtyfllgyoa.us-east-1.rds.amazonaws.com',
        user: process.env.DB_USER || 'admin',
        password: process.env.DB_PASSWORD || 'uythgfsctgvf123w',
        database: process.env.DB_NAME || 'mydbinstance',
    },
    
    // AWS Configuration
    aws: {
        accountId: process.env.AWS_ACCOUNT_ID || '920726643262',
        region: process.env.AWS_REGION || 'us-west-1', 
    },

    // Application Settings
    app: {
        port: process.env.PORT || 5000, 
    },
};

module.exports = config;
