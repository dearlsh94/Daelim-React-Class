/**
 * Created by guangqiang on 2017/12/19.
 */
import { fork } from 'redux-saga/effects'
import {addItemFlow, removeItemFlow, toggleItemFlow, loadItemFlow} from './listSaga'
import {changeTodoInputColorFlow} from './colorSaga'
import {increaseFlow, decreaseFlow} from './counterSaga'

export default function* rootSaga() {
  yield fork(increaseFlow);
  yield fork(decreaseFlow);

  yield fork(addItemFlow);
  yield fork(removeItemFlow);
  yield fork(toggleItemFlow);
  yield fork(loadItemFlow);

  yield fork(changeTodoInputColorFlow);
}