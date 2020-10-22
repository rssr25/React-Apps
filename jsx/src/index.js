//import react and react DOM
import React from 'react';
import ReactDOM from 'react-dom';


//create a react component
const App = () => {

    const buttonText = {text: "Click on Me!"}
    const labelName = "Enter Name:"

    function getTime() {

        return (new Date()).toLocaleTimeString()
    }

    return (
        <div>
            <label className="label" htmlFor="name">{labelName}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}}>
                {buttonText.text}
            </button>
            <h3>{getTime()}</h3>

        </div>
    )
}

//show that component on the screen
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)