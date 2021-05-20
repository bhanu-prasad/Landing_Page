import React, { Component } from 'react'
import ggl from "../Assets/images/gglclient.png"
import micro from "../Assets/images/microclient.png"
import acc from "../Assets/images/accclient.png"
import net from "../Assets/images/netclient.png"
import "../css/default.css"
import "../css/style.css"
import "../css/LineIcons.css"
import "../css/style.css.map"   
import "../css/magnific-popup.css"
import { NavItem } from 'reactstrap'

const clients = [
    {   
        clientimg:acc
    },
    {   
        clientimg:micro
    },
    {   
        clientimg:ggl
    },
    {   
        clientimg:net
    }]



const Client = (props) => {
    return (
        <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
                <img src={props.clientimg} alt="Logo"/>
            </div> 
        </div>
    );
}

const climap = clients.map((item,index) => {
    return <Client key={index} clientimg={item.clientimg}/>
})

export default class Brands extends Component {
    render() {
        return (
            <section className="client-logo-area">
                <div className="container">
                    <div className="row">
                        {climap}
                    </div> 
                </div> 
            </section>
        )
    }
}
