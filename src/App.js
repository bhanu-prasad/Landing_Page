import React from "react"
import ReactDom from "react-dom"
import Home from "./components/home"
import Services from "./components/services"
import ScrollToTop from "./components/scrolltotop"
import Footer from "./components/footer"
import "./App.css"

class App extends React.Component{
    render(){
        return(<>
        <Home/>
        <Services/>
        <Footer/>
        </>)
    }
}
export default App