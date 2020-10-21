//import react and react DOM
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = () => {
    return <div>Hi App There!</div>
}

//show that component on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)