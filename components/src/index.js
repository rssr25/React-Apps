import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'


const App = () => {
    return(

        <div className="ui container comments">
            <CommentDetail author = "Rahul" timeAgo="Today at 4:55AM" text="What a nice blog!" avatar={faker.image.avatar()}/>
            <CommentDetail author = "Bhavya" timeAgo="Today at 2:00AM" text="Very well written!" avatar={faker.image.avatar()}/>
            <CommentDetail author = "Arun" timeAgo="Yesterday at 5:00PM" text="I don't know I don't like it." avatar={faker.image.avatar()}/>
        </div>

    );
} 

ReactDOM.render(<App/>, document.querySelector('#root')) 