import React, { Component } from 'react';
import Second from './ApiComponent';
import { Link } from 'react-router-dom';

class First extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {first: true};
  }


  render()
  {
    return(
      <div>
        <Link to = "/api">
         <button>{this.props.buttonText}</button>
        </Link>
      </div>
    );
  }
}

export default First;
