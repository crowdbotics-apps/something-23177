import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth39181867Saga from '../features/EmailAuth39181867/redux/sagas';
import EmailAuth40181866Saga from '../features/EmailAuth40181866/redux/sagas';
import EmailAuth36181860Saga from '../features/EmailAuth36181860/redux/sagas';
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
EmailAuth39181867Saga,
EmailAuth40181866Saga,
EmailAuth36181860Saga,
EmailAuth37181859Saga,
EmailAuth38181858Saga,
    
  ]);
}