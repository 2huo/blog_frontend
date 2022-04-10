import React from 'react';
import { useParams } from 'react-router';

function ManageTopic() {
  const { id: topicId } = useParams();

  return <div>{topicId}</div>;
}

export default ManageTopic;
