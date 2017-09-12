import React, { Component } from 'react'

export default class Dashboard extends Component {
  render () {
  	console.log(this);
    return (
      <section className="white-bg pad-135-t">
	      <div className="container">
	        <div className="row">
	          <div className="col-lg-12 col-md-12">
	            <div className="section-title-1 text-center">
	              <h1 className="text-blue">Our team</h1>
	              <div className="title-line" />
	              <p>List of people who matter in our Company</p>
	            </div>
	          </div>
	        </div>
	        <div className="team-2">
	          <div className="row">
	            <div className="col-lg-3 col-md-3 col-sm-6">
	              <div className="team-2-box">
	                <img className="img-responsive" src={require('../../../image/speaker/01.jpg')} alt="" />
	                <div className="team-overlay text-center"> 
	                  <div className="info">
	                    <h5 className="text-white">Martin Smith</h5>
	                    <span>web designer</span>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-lg-3 col-md-3 col-sm-6">
	              <div className="team-2-box">
	                <img className="img-responsive" src={require('../../../image/speaker/01.jpg')} alt="" />
	                <div className="team-overlay text-center"> 
	                  <div className="info">
	                    <h5 className="text-white">Martin Smith</h5>
	                    <span>web designer</span>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-lg-3 col-md-3 col-sm-6">
	              <div className="team-2-box">
	                <img className="img-responsive" src={require('../../../image/speaker/01.jpg')} alt="" />
	                <div className="team-overlay text-center"> 
	                  <div className="info">
	                    <h5 className="text-white">Martin Smith</h5>
	                    <span>web designer</span>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-lg-3 col-md-3 col-sm-6">
	              <div className="team-2-box">
	                <img className="img-responsive" src={require('../../../image/speaker/01.jpg')} alt="" />
	                <div className="team-overlay text-center"> 
	                  <div className="info">
	                    <h5 className="text-white">Martin Smith</h5>
	                    <span>web designer</span>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div className="row mt-30">
	            <div className="col-lg-3 col-md-3 col-sm-6">
	              <div className="team-2-box">
	                <img className="img-responsive" src={require('../../../image/speaker/01.jpg')} alt="" />
	                <div className="team-overlay text-center"> 
	                  <div className="info">
	                    <h5 className="text-white">Martin Smith</h5>
	                    <span>web designer</span>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-lg-3 col-md-3 col-sm-6">
	              <div className="team-2-box">
	                <img className="img-responsive" src={require('../../../image/speaker/01.jpg')} alt="" />
	                <div className="team-overlay text-center"> 
	                  <div className="info">
	                    <h5 className="text-white">Martin Smith</h5>
	                    <span>web designer</span>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-lg-3 col-md-3 col-sm-6">
	              <div className="team-2-box">
	                <img className="img-responsive" src={require('../../../image/speaker/01.jpg')} alt="" /> 
	                <div className="team-overlay text-center"> 
	                  <div className="info">
	                    <h5 className="text-white">Martin Smith</h5>
	                    <span>web designer</span>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="col-lg-3 col-md-3 col-sm-6">
	              <div className="team-2-box">
	                <img className="img-responsive" src={require('../../../image/speaker/01.jpg')} alt="" />
	                <div className="team-overlay text-center"> 
	                  <div className="info">
	                    <h5 className="text-white">Martin Smith</h5>
	                    <span>web designer</span>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>

    )
  }
}