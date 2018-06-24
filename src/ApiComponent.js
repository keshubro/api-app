import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import First from './ButtonComponent';

class Second extends Component{


  constructor(props)
  {
    super(props);
    this.state = {
      comapnyName: null,
      loaded: false
    }
  }

  componentDidMount()
  {

    fetch('http://ewuat.edelbusiness.in/EWM/api/quotes/equity/22_NSE')
    .then(results =>
      results.json()
    )
    .then(data => this.setState({companyName: data.equityDetails.CompanyName, loaded: true}));

  }

  render()
  {
    if(this.state.loaded == false)
    {return(
        <button>Loading...</button>
      );
    }


    return(
      <div>

        {this.state.companyName}
      </div>
    );


  }
}

export default Second;
