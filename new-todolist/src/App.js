import React, { Component } from 'react'

import './App.css';
import FollowUserListItem from './components/FollowUserListItem'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user: [
         {
         nick: 'phong9080',
         avatarURL: 'https://picsum.photos/50'
       },
       {
        nick: 'phong0908',
        avatarURL: 'https://picsum.photos/50'
       }
      ]
    }
  }

  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <FollowUserListItem user = {user}/>
      </div>
    )
  }
}




export default App;
