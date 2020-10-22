//import react and react DOM
import React from 'react';
import ReactDOM from 'react-dom';


//create a react component
const App = () => {

    const buttonText = {text: "Click on Me!"}
    const labelName = "Enter Name:"

    return (
        <div>
            <label className="label" for="name">{labelName}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}}>
                {buttonText.text}
            </button>
        </div>
    )
}

//show that component on the screen
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)