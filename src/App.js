import React from "react"
import ReactDom from "react-dom"
import Home from "./components/home"
import Services from "./components/services"
class App extends React.Component{
    render(){
        return(<>
        <Home/>
        <Services/>
        </>)
    }
}
export default App