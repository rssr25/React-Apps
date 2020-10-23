import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
    return(

        <div className="ui container comments">

            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure you want to fuck that bitch up?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Rahul" 
                    timeAgo="Today at 4:55AM" 
                    text="What a nice blog!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author = "Bhavya" 
                    timeAgo="Today at 2:00AM" 
                    text="Very well written!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author = "Arun" 
                    timeAgo="Yesterday at 5:00PM" 
                    text="I don't know I don't like it." 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>

    );
} 

ReactDOM.render(<App/>, document.querySelector('#root')) 