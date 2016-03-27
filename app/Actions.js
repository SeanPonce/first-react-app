import uuid from 'node-uuid';

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    id: uuid.v4(),
    message
  };
};

export function clearMessages() {
  return {
    type: 'CLEAR_ALL_MESSAGES',
  };
};
