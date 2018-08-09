import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Management, Contact, Partnership } from 'pages';
import AppNav from 'components/AppNav';

import './App.css';

class App extends Component {
  render() {
    return (            
      <div>
        <AppNav/>
        <div className='App-body'>
            <Route exact path="/" component={Home}/>

            <Route exact path="/about" component={About}/>

            <Switch>
              <Route path="/management/:id" component={Management}/>
              <Route path="/management" component={Management}/>
            </Switch>

            <Switch>
              <Route path="/contact/:id" component={Contact}/>
              <Route path="/contact" component={Contact}/>
            </Switch>

            <Route exact path="/partnership" component={Partnership}/>
        </div>
      </div>   
    );
  }
}

export default App;