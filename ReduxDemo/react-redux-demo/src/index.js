import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import store from './store';
import { Provider } from 'react-redux';

const App = (
  <Provider store={store}> {/* 使用提供器provider, 组件的其他所有子组件可以使用store */}
    <TodoList/>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

