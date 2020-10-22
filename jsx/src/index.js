//import react and react DOM
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText(){

    return 'Click On Me!'
}
//create a react component
const App = () => {

    return (
        <div>
            <label className="label" for="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}}>
                {getButtonText()}
            </button>
        </div>
    )
}

//show that component on the screen
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)