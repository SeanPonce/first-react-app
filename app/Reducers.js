import {ActionTypes} from './Actions';
import Immutable from 'immutable';
import {combineReducers} from 'redux';

const initialState = new Immutable.List();

function messages(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.push({
        id: action.id,
        message: action.message
      });

    default:
      return state;
  }
}

export default function() {
  //return createStore(messages, initialState);
  return combineReducers({messages});
};
