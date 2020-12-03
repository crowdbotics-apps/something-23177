import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth40181866Reducer from '../features/EmailAuth40181866/redux/reducers';
import EmailAuth36181860Reducer from '../features/EmailAuth36181860/redux/reducers';
import EmailAuth37181859Reducer from '../features/EmailAuth37181859/redux/reducers';
import EmailAuth38181858Reducer from '../features/EmailAuth38181858/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth40181866: EmailAuth40181866Reducer,
EmailAuth36181860: EmailAuth36181860Reducer,
EmailAuth37181859: EmailAuth37181859Reducer,
EmailAuth38181858: EmailAuth38181858Reducer,

});