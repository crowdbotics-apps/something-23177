import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth37181859Reducer from '../features/EmailAuth37181859/redux/reducers';
import EmailAuth38181858Reducer from '../features/EmailAuth38181858/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth37181859: EmailAuth37181859Reducer,
EmailAuth38181858: EmailAuth38181858Reducer,

});