import React, { Component } from 'react';

class SocialProfile extends Component {
  continue =e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back =e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const{values, inputChange} = this.props;
    return (
      <div className="form-container">
        <h1 className="mb-5">Social Profile</h1>
        <div className="form-group">
        <label htmlFor="facebook">Facebook URL</label>
        <input type="text" name="facebook" className="form-control" onChange={inputChange('facebook')} valu={values.facebook} />
        </div>
        <div className="form-group">
        <label htmlFor="twitter">Twitter URL</label>
        <input type="text" name="twitter" className="form-control" onChange={inputChange('twitter')} valu={values.twitter} />
        </div>
        <div className="form-group">
        <label htmlFor="github">GitHub URL</label>
        <input type="text" name="github" className="form-control" onChange={inputChange('github')} valu={values.github} />
        </div>
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

export default SocialProfile;
