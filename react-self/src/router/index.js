import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import RefsDemo from '../refs/index';
import ContextDemo from '../context/index';

import s from './style.module.scss';

function AppRouter() {
  return (
    <Router>
      <ul className={s.container}>
        <li><Link to="/refs" className={s.item}>refs 页面</Link></li>
        <li><Link to="/context" className={s.item}>context 页面</Link></li>
      </ul>

      <Switch>
        <Route path="/refs" component={RefsDemo} />
        <Route path="/context" component={ContextDemo} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  )
};

export default AppRouter;