import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import First from './ButtonComponent';
import Second from './ApiComponent';

class Main extends Component
{
    constructor(props)
    {
      super(props);
      this.state = {
        buttonText : "Get Details"
      };
    }


  render(){
    return(
      <div>
          <Switch>
              <Route path = '/butt' component = {() => <First buttonText = {this.state.buttonText} />} />
              <Route path = '/api' component =  {() => <Second buttonText = {this.state.buttonText} />}  />
              <Redirect to = '/butt' />
          </Switch>
      </div>
    );
  }
}

export default Main;
