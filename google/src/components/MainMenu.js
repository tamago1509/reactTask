import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react';
import { Menu, Avatar } from 'antd';
import Home from './Home';
import Blog from './Blog';
import './MainMenu.css';
import Aboutme from './Aboutme';




function MainMenu() {
    return (
        <Router>
            <div className="header">
                <div className="logo">
                    <Avatar src="https://lh3.googleusercontent.com/proxy/_wpJoLULuokpA9tHY9dWltY8F4KOY6NIUJhSBCE_W8JOKWplajexp4k21D8h4YcU58fAdUMkT_-wtxAyCtgxqjj8qiDUJlKGKbje4N7C-bdwWGX4aeHtDyw7myvS" />
                </div>
                <div className="menu">
                    <Menu mode="horizontal">
                        <Menu.Item>
                            <Link to="/">Trang chủ</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/blog">Blog</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/me">About me</Link>
                        </Menu.Item>
                    </Menu>
                    
                </div>
            </div>
            
            <Switch>
                <Route path="/me">
                    <Aboutme />
                </Route>
                <Route path="/blog">
                    
                    <Blog />
                </Route>
                <Route path="/">
                    
                    <Home />
                </Route>
            </Switch>

        </Router>
    )
}


  

  

export default MainMenu
