import uuid from 'node-uuid';

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    id: uuid.v4(),
    message
  };
};
