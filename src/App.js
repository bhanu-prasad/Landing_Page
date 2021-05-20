import React from "react"
import ReactDom from "react-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import Services from "./components/services"
import Footer from "./components/footer"
import Brands from "./components/brands"
import Getintouch from "./components/getintouch"
import "./App.css"
import "./css/default.css"
import "./css/style.css"
import "./css/LineIcons.css"
import "./css/style.css.map"   
import "./css/magnific-popup.css"
import ScrollToTop from "./components/scrolltotop"

class App extends React.Component{
    render(){
        return(<>
        <Navbar/>
        <Home/>
        <Services/>
        <Brands/>
        <Getintouch/>
        <Footer/>
        <ScrollToTop/>
        </>)
    }
}
export default App