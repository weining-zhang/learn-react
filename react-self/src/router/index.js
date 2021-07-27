import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import RefsDemo from '../refs/index';
import ContextDemo from '../context/index';
import ContainmentDemo from '../containment/index';

import s from './style.module.scss';

function AppRouter() {
  return (
    <Router>
      <ul className={s.container}>
        <li>
          <Link to="/refs" className={s.item}><span>refs</span> 页面</Link>
        </li>
        <li>
          <Link to="/context" className={s.item}><span>context</span> 页面</Link>
        </li>
        <li>
          <Link to="/containment" className={s.item}><span>containment</span> 页面</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/refs" component={RefsDemo} />
        <Route path="/context" component={ContextDemo} />
        <Route path="/containment" component={ContainmentDemo} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  )
};

export default AppRouter;