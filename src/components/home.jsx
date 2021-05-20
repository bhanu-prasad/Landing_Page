import React, { Component,useState } from 'react';
import {Button,Modal} from "bootstrap"
import {$} from 'jquery';
import "../css/default.css"
import "../css/style.css"
import "../css/LineIcons.css"
import "../css/style.css.map"   
import "../css/magnific-popup.css"
import "./home.css"


import ModalVideo from "react-modal-video"
import "react-modal-video/scss/modal-video.scss"
import  hwaveshape from "../Assets/images/header-shape.svg"



class Home extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
    
      openModal () {
        this.setState({isOpen: true})

      }
    

    render() {
        return (
            <>
            <div>
            <div id="home" className="header-hero bg_cover" >
                <div className="container bg_test">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="header-content text-center">
                                    <h3 className="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
                                    <p className="text">A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</p>
                                    <ul className="header-btn">
                                        <li><a className="main-btn btn-one mr-2" href="#">GET IN TOUCH</a></li>
                                        <li>
                                            <ModalVideo 
                                                channel='youtube' 
                                                isOpen={this.state.isOpen}
                                                videoId='r44RKWyfcFw'
                                                onClose={() => {this.setState({isOpen: false})}
                                                
                                            }
                                            />
                                            <a className="main-btn btn-two video-popup modal_btn" onClick={this.openModal} >WATCH THE VIDEO <i className="lni-play"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div> 
                    </div>
                <div/>
                <div className="header-shape">
                    <img src={hwaveshape} alt="shape"/>
                </div>
            </div>
            
            </div>
            </>
            
        );
    }
}

export default Home;
