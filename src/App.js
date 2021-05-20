import React from "react"
import ReactDom from "react-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import Services from "./components/services"
import Footer from "./components/footer"
import Brands from "./components/brands"
import Getintouch from "./components/getintouch"
import Testimonial from "./components/Testimonial"
import Price from "./components/price"
import Calltoaction from "./components/calltoaction"
import ScrollToTop from "./components/scrolltotop"

class App extends React.Component{
    render(){
        return(<>
        <Navbar/>
        <Home/>
        <Services/>
        <Price />
        <Calltoaction/>
        <Testimonial/>
        <Brands/>
        <Getintouch/>
        <Footer/>
        <ScrollToTop/>
        
        </>)
    }
}
export default App