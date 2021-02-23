import { createStore } from 'redux'; // 引入redux的 createStore
import reducer from './reducer';

const store = createStore(reducer) // reducer 注入到 createStore中

export default store 