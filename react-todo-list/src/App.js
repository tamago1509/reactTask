import React,{Component} from 'react';
import Header from './components/Header';
import FormLogin from './components/FormLogin';
import TabMenu from './components/TabMenu';
import './App.css';

const items = [
  {src:"https://image.flaticon.com/icons/svg/860/860807.svg", title:"HOME"},
  {src:"https://img.icons8.com/ios/50/000000/gift.png", title: "DEALS"},
  {src:"https://img.icons8.com/cotton/64/000000/upload-to-cloud--v1.png", title:"UPLOAD"},
  {src:"https://img.icons8.com/wired/64/000000/tea-cup.png", title :"WORKS"},
  {src:"https://img.icons8.com/ios/50/000000/gear.png", title:"SETTING"}

]

class App extends Component {
  
  render(){
    return (
      <div className="App">
        
          <TabMenu items = { items } />
        
      </div>
    )
  }

}

export default App;
