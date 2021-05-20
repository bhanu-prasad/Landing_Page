import React, { Component } from 'react';
import calltoaction from "../Assets/images/call-to-action.png"
import "../css/default.css"
import "../css/style.css"
import "../css/LineIcons.css"
import "../css/style.css.map"   
import "../css/magnific-popup.css"
class Calltoaction extends Component {
    render() {
        return (
            <div>
            <section id="call-to-action" className="call-to-action">
                <div className="call-action-image">
                    <img src={calltoaction} alt="call-to-action"/>
                </div>
        
            <div className="container-fluid">
                <div className="row justify-content-end">
                    <div className="col-lg-6">
                        <div className="call-action-content text-center">
                            <h2 className="call-title">Curious to Learn More? Stay Tuned</h2>
                            <p className="text">You let us know whenever you want us to update anything or think something can be optimised.</p>
                            <div className="call-newsletter">
                                <i className="lni-envelope"></i>
                                <input type="text" placeholder="john@email.com"/>
                                <button type="submit">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
         </section>
            </div>
        );
    }
}

export default Calltoaction;
