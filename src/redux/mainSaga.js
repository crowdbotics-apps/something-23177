import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth37181859Saga from '../features/EmailAuth37181859/redux/sagas';
import EmailAuth38181858Saga from '../features/EmailAuth38181858/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth37181859Saga,
EmailAuth38181858Saga,
    
  ]);
}