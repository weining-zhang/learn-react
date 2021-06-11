import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        {cid: 123, title: '我是1号'},
        {cid: 456, title: '我是2号'},
        {cid: 789, title: '我是3号'}
      ]
    }
    // this.props.history.push('/home/')
  }
  
  render() { 
    return (  
      <>
        <Redirect to="/home/" />
        <h2>welnee.com</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={'/list/' + item.cid}>
                    {item.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </>
    );
  }
}

export default Index;