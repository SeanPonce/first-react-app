import uuid from 'node-uuid';
import Actions from './Actions';
import Immutable from 'immutable';
import {createStore} from 'redux';

const initialState = Immutable.fromJS(
  [
    {
      id: uuid.v4(),
      message: "First message"
    },
    {
      id: uuid.v4(),
      message: "Second message"
    },
    {
      id: uuid.v4(),
      message: "Third message"
    }
  ]
);

function messages(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_MESSAGE:
      return state.push({
        id: uuid.v4(),
        message: action.message
      });

    default:
      return state;
  }
}

export default function configureStore() {
  console.log("configureStore()");
  return createStore(messages, initialState);
};
