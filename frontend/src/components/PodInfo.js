import React from 'react';

const PodInfo = ({ data }) => {
  return (
    <div>
      <p><strong>Pod IP:</strong> {data.podIp}</p>
      <p><strong>Container ID:</strong> {data.containerId}</p>
      <p><strong>Node IP:</strong> {data.nodeIp}</p>
      <p><strong>AWS Account Number:</strong> {data.accountId}</p>
      <p><strong>AWS Region:</strong> {data.region}</p>
    </div>
  );
};

export default PodInfo;