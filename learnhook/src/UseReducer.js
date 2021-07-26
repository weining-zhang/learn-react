import React, { useReducer } from 'react';

/* 
  正常初始化
*/
const initialState = {
  count: 0
};

function normalReducer(state, action) {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

/* 
  惰性初始化
*/
function init(initialCount) {
  return {
    count: initialCount
  };
}

function lazyReducer(state, action) {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function NormalCounter() {
  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  // useReducer 接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法
  // 场景: 例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化

  // 有 2 种不同初始化 useReducer state 的方式:
  // 1、将初始 state 作为第二个参数传入 useReducer 是最简单的方法
  const [state, dispatch] = useReducer(normalReducer, initialState);
  return (
    <>
      NormalCount: {state.count}
      <button onClick={() => {dispatch({type: 'increment'})}}>+</button>
      <button onClick={() => {dispatch({type: 'decrement'})}}>-</button>
    </>
  )
};

function LazyCounter(props) {
  // 2、惰性初始化: 需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)
  const [state, dispatch] = useReducer(lazyReducer, props.initialCount, init);
  return (
    <>
      LazyCount: {state.count}
      <button onClick={() => {dispatch({type: 'reset', payload: 1})}}>Reset</button>
      <button onClick={() => {dispatch({type: 'increment'})}}>+</button>
      <button onClick={() => {dispatch({type: 'decrement'})}}>-</button>
    </>
  )
}

function Counter() {
  return (
    <>
      <NormalCounter/><br/>
      <LazyCounter
        initialCount={1}
      />
    </>
  )
}

export default Counter;