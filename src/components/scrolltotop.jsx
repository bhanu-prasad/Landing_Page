import React, { Component } from "react";
import "./home.css"
import "../css/default.css"
import "../css/style.css"
import "../css/LineIcons.css"
import "../css/style.css.map"   
import "../css/magnific-popup.css"


export default class ScrollToTop extends Component {

    render(){
        return(
            <a class="back-to-top" id="back-to-top" href="#home"><i class="lni-chevron-up"></i></a>
        )
    }
}