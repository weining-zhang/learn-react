import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './Pages/Index';
import List from './Pages/List';
import Home from './Pages/Home';

function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li> {/* Link 会把标签渲染成 a 标签 */}
        <li><Link to="/list/">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} /> {/* Route标签里配置路由规则，包裹在Router标签里 */}
      <Route path="/home/" component={Home} />
    </Router>
  )
}

export default AppRouter