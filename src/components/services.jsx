import React, { Component } from 'react';
import "../css/default.css"
import "../css/style.css"
import "../css/LineIcons.css"
import "../css/style.css.map"   
import "../css/magnific-popup.css"
import "./services.css"
import servimg from "../Assets/images/services.png"

const services =[{
    id:1,
    tileclass:"lni-bolt",
    title:"Startup",
    desc:"Short description for the ones \n who look for something new. "
    
},
{
    id:2,
    tileclass:"lni-bar-chart",
    title:"Saas Business",
    desc:"Short description for the ones \n who look for something new."
    
},
{
    id:3,
    tileclass:"lni-brush",
    title:"Agency",
    desc:"Short description for the ones \n who look for something new."
    
},
{
    id:4,
    tileclass:"lni-bulb",
    title:"App Landing",
    desc:"Short description for the ones \n who look for something new."
    
}

]

const Servcomp = (props)=>{
    return(
         <div className="col-md-6">
             <div className="services-content mt-40 d-sm-flex">
                <div className="services-icon">
                    <i className={props.tileclass}></i>
                </div>
                <div className="services-content media-body">
                    <h4 className="services-title">{props.title}</h4>
                    <p className="text">{props.desc.split("\n")}</p>
                </div>
            </div>
        </div>
    )
}



export default class Services extends Component {
    
    render() {
        return (
            <>
            <section id="service" className="services-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title pb-10">
                                <h4 className="title">Crafted For</h4>
                                    <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                             </div>  
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                    <Servcomp tileclass={services[0].tileclass} title={services[0].title} desc={services[0].desc}/>
                                    <Servcomp tileclass={services[1].tileclass} title={services[1].title} desc={services[1].desc}/>
                                <div/>    
                            <div/>    
                        <div/>    
                        <Servcomp tileclass={services[2].tileclass} title={services[2].title} desc={services[2].desc}/>
                        <Servcomp tileclass={services[3].tileclass} title={services[3].title} desc={services[3].desc}/>
                    </div>
                    </div> 
                </div> 
         
                <div className="services-image d-lg-flex align-items-center">
                    <div className="image">
                        <img src={servimg} alt="Services"/>
                    </div>
                </div> 
            </div>
            </section>   
         </>)
    }

}

