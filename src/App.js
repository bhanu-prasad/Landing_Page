import React from "react"
import ReactDom from "react-dom"
import Navbar from "./components/navbar"

class App extends React.Component{
    render(){
        return(
            <div className='App'>
                <Navbar/>

            </div>
        )
    }
}
export default App