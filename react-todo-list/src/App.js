import React,{Component} from 'react';
import Header from './components/Header';
import FormLogin from './components/FormLogin';
import TabMenu from './components/TabMenu';
import './App.css';
import FollowFriendListItem from './components/FollowFriendListItem';
import Table from './components/Table';
import Notification from './components/Notification';
import Traficlight from './components/Traficlight';
import Search from './components/Search';
import InputLimit from './components/InputLimit';
import Validate from './components/Validate';
import Todolist from './components/Todolist';
import Modal from './components/Modal';



// const items = [
//   {src:"https://image.flaticon.com/icons/svg/860/860807.svg", title:"HOME"},
//   {src:"https://img.icons8.com/ios/50/000000/gift.png", title: "DEALS"},
//   {src:"https://img.icons8.com/cotton/64/000000/upload-to-cloud--v1.png", title:"UPLOAD"},
//   {src:"https://img.icons8.com/wired/64/000000/tea-cup.png", title :"WORKS"},
//   {src:"https://img.icons8.com/ios/50/000000/gear.png", title:"SETTING"}

// ]


class App extends Component {

  render(){
    
    return (
      <div className="App">
        
        <Modal content = {[<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut nemo excepturi ullam nihil, asperiores nisi atque ea dolores.
              Sed voluptates alias optio, sint numquam accusamus.
              Recusandae quia necessitatibus labore exercitationem!
              Porro aliquam necessitatibus, 
              expedita modi doloremque fugit eligendi facilis accusantium per</p>]}/>
      
        {/* <Todolist /> */}
          {/* <Validate /> */}
          {/* <InputLimit /> */}
          {/* <Search /> */}
          {/* <Traficlight /> */}
          {/* <Notification /> */}
          {/* <Table /> */}
          {/* <FollowFriendListItem /> */}
          {/* <TabMenu items = { items } /> */}
        
        
      </div>
    )
  }

}

export default App;
