import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Manage, Contact, Partner } from 'pages';
import Menu from 'components/Menu';

import './App.css';

class App extends Component {
  render() {
    return (      
      <div>        
        <Menu/>
        <div className='App-body'>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/manage" component={Manage}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/partner" component={Partner}/>
        </div>        
      </div>
    );
  }
}

export default App;