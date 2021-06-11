import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import EarnMoney from './workplace/EarnMoney';
import GetUpEarly from './workplace/GetUpEarly';

function Workplace() {
  return (
    <>
      <Redirect to="/workplace/money" />
      
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/money" >加薪秘籍</Link></li>
          <li><Link to="/workplace/getup" >早起攻略</Link></li>
        </ul>
      </div>

      <div className="videoContent">
        <Route path="/workplace/money" component={EarnMoney} />
        <Route path="/workplace/getup" component={GetUpEarly} />
      </div>
    </>
  )
}

export default Workplace