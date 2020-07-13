import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import SocialProfile from './SocialProfile';
import Confirm from './Confirm';
import Success from './Success';

export class MultiStepForm extends Component {
  state = {
    step: 1,
    name: "", 
    email: "", 
    phone: "", 
    password: "", 
    facebook: "", 
    twitter: "", 
    github: ""
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step+1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step-1
    })
  }

inputChange = input => e => {
this.setState({
  [input]: e.target.value
})
}

  render() {
    const { step } = this.state;
    const{ name, email, password, phone, facebook, github, twitter} = this.state;
    const values = { name, email, password, phone, facebook, github, twitter };
switch (step) {
  case 1:
  return (
    <AccountSetup
    nextStep={this.nextStep}
    inputChange={this.inputChange}
    values={values}
     />
  )
  break;

  case 2:
  return(
    <SocialProfile
     nextStep={this.nextStep}
     prevStep={this.prevStep}
     inputChange={this.inputChange}
     values={values}
    />
  )
  break;
  case 3:
  return(
    <Confirm 
     nextStep={this.nextStep}
     prevStep={this.prevStep}
     values={values}
    />
  )
case 4:
return(
  <Success />
)
}

    return (
      <div>
        
      </div>
    )
  }
}

export default MultiStepForm;
