import React, { Component } from 'react';

class Confirm extends Component {
  continue =e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back =e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const{
      values: { name, email, phone, password, facebook, twitter, github } 
      } = this.props;
    return (
      <div className="form-container">
        <h1 className="mb-5">Confirm</h1>
        <ul className="list-group">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Phone: {phone}</li>
        <li className="list-group-item">Password: {password}</li>
        <li className="list-group-item">
        FACEBOOK URL: <a href={facebook}>{facebook}</a>
        </li>
         <li className="list-group-item">
        TWITTER URL: <a href={twitter}>{twitter}</a>
        </li>
         <li className="list-group-item">
        GITHUB URL: <a href={github}>{github}</a>
        </li>
        </ul>
        <br />
        <div className="row">
          <div className="col-6">
            <button className="btn btn-danger" onClick={this.back}>Back</button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary" onClick={this.continue}>Continue</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
