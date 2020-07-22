import React from 'react';
import Header from './components/Header';
import FormLogin from './components/FormLogin';
import TabMenu from './components/TabMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className ="navbar">
        <TabMenu className="tab" src="https://image.flaticon.com/icons/svg/860/860807.svg" title="HOME" />
        <TabMenu className="tab" src="https://img.icons8.com/ios/50/000000/gift.png" title="DEALS" />
        <TabMenu className="tab" src="https://img.icons8.com/cotton/64/000000/upload-to-cloud--v1.png" title="UPLOAD" />
        <TabMenu className="tab" src="https://img.icons8.com/wired/64/000000/tea-cup.png" title="WORKS" />
        <TabMenu className="tab" src="https://img.icons8.com/ios/50/000000/gear.png" title="SETTING" />
      </nav>
      
    </div>
  );
}

export default App;
