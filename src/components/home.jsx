import React, { Component,useState } from 'react';
import {Button,Modal} from "bootstrap"
import {$} from 'jquery';
import "../css/default.css"
import "../css/style.css"
import "../css/LineIcons.css"
import "../css/style.css.map"   
import "../css/magnific-popup.css"
import "./home.css"


import  hwaveshape from "../Assets/images/header-shape.svg"



class Home extends Component {
   

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
                                        <li><a class="main-btn btn-two video-popup" href="https://www.youtube.com/watch?v=r44RKWyfcFw">WATCH THE VIDEO <i class="lni-play"></i></a></li>
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
