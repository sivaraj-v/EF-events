import React, { Component } from 'react'
import {Banner} from '../helpers/banner.js'
import client1 from '../../image/clients/01.png';
import client2 from '../../image/clients/02.png';

export default class Home extends Component {
  render () {
    return (
      <div>
        <Banner/> 
        <section className="ovr-hid page-section-ptb-20">
	        <div className="container">
	          <div className="row">
	            <div className="col-lg-12 col-md-12">
	              <div className="section-title-1 text-center">
	                <h1 className="text-blue">Where can I get some?</h1>
	                <div className="title-line" />
	              </div>
	            </div>
	          </div>
	          <div className="row">
	            <div className="col-lg-6 col-md-6">
	              <div className="custom-content">
	                <h3 className="text-blue">We know the secret of ultimate success</h3>
	                <b>Start now! Your big opportunity may be right where you are! </b>
	                <p className="mt-30">Lorem ipsum dolor sit amet, consectetur adipisicing eli. Vero quod conseqt quibusdam enim expedita sed quia nesciunt incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic obcaecati.
	                  <br />
	                  <br /> Roin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
	                <a href="" className="button mt-20"><span>Learn More</span><i className="fa fa-hand-o-right" /></a>
	              </div>
	            </div>
	            <div className="col-lg-6 col-md-6">
	              <div className="js-video [youtube, widescreen]">
	                <iframe title="Data" src="https://www.youtube.com/embed/XxVg_s8xAms?ecver=2" frameBorder={0} allowFullScreen />
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="container">
	          <div className="row">
	            <div className="col-lg-6 col-md-6">
	              <div className="clients-box mb-30 clearfix">
	                <div className="clients-photo">
	                  <img src={client1} alt="" />
	                </div>
	                <div className="clients-info">
	                  <h4>Lorem ipsum dolor sit amet</h4>
	                  <a href=""> URL <i className="fa fa-link" />More details</a>
	                  <p>Lorem ipsum dolor sit amet of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
	                </div>
	              </div>
	            </div>
	            <div className="col-lg-6 col-md-6">
	              <div className="clients-box mb-30 clearfix">
	                <div className="clients-photo">
	                  <img src={client2} alt="" />
	                </div>
	                <div className="clients-info">
	                  <h4>Lorem ipsum dolor sit amet</h4>
	                  <a href=""> URL <i className="fa fa-link" />More details</a>
	                  <p>Lorem ipsum dolor sit amet of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </section>
      </div>
    )
  }
}