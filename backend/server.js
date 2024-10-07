const express = require('express');
const mysql = require('mysql2');
const k8s = require('@kubernetes/client-node');
const os = require('os');

const app = express();
const port = 5000;

// RDS database connection
const db = mysql.createConnection({
    host: 'mydbinstance.czhtyfllgyoa.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'uythgfsctgvf123w',
    database: 'mydbinstance'
});

// Kubernetes client
const kc = new k8s.KubeConfig();
kc.loadFromCluster();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

app.get('/api/data', async (req, res) => {
    try {
        // Get AWS Account ID
        const accountId = process.env.AWS_ACCOUNT_ID || 'unknown';

        // Get EKS Pod and Node Data
        const podIp = req.connection.remoteAddress;
        const containerId = os.hostname();
        const nodeIp = os.networkInterfaces()['eth0'][0].address; // Assumes eth0 is used
        const region = process.env.AWS_REGION || 'us-west-2'; // Specify region

        // Save data to RDS
        const query = 'INSERT INTO pod_info (pod_ip, container_id, node_ip, account_no, region) VALUES (?, ?, ?, ?, ?)';
        db.execute(query, [podIp, containerId, nodeIp, accountId, region], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error saving data to RDS');
            }
            res.json({ podIp, containerId, nodeIp, accountId, region });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Backend service running on port ${port}`);
});