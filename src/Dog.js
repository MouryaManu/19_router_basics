import React, { Component } from 'react'
 
class Dog extends Component {
    render() {
        return (
            <div className="Dog">
                <h1> This is Dog Component</h1>
                <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>
        )
    }
}

export default Dog;