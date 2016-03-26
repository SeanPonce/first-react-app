import uuid from 'node-uuid';
import {Actions} from 'Actions';
import {List, Map} from 'immutable';
import {combineReducers} from 'redux';

function logList(state = List(), action) {
  switch (action.type) {
    case Actions.ADD_LOG:
      return state.push(Map({
        id: uuid.v4(),
        message: action.message
      }));

    default:
      return state;
  }
}

export default combineReducers({
  logList
});
