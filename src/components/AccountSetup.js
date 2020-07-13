import React, { Component } from 'react';

class AccountSetup extends Component {
  continue =e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const{values, inputChange} = this.props;
    return (
      <div className="form-container">
        <h1 className="mb-5">Account Setup</h1>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="form-control" onChange={inputChange('name')} valu={values.name} />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="form-control" onChange={inputChange('email')} valu={values.email} />
        </div>
        <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="number" name="phone" className="form-control" onChange={inputChange('phone')} valu={values.phone} />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className="form-control" onChange={inputChange('password')} valu={values.password} />
        </div>
        <br />
        <div className="text-right">
        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default AccountSetup;
