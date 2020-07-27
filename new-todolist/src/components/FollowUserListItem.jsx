import React, { Component } from 'react'
import './FollowUserListItem.css'
import PropTypes from 'prop-types';

class FollowUserListItem extends Component {
    
    render() {
        let {user} = this.props;
        return (
            <div >
            {
                user.map((user,key) =>
                <div className="friend" key ={key}>
                        <img src={user.avatarURL} alt="avatar"/>
                    <div className= 'content'>
                        <span><strong>{user.nick}</strong></span><br/>
                        <span className="sub">Gợi ý cho bạn</span>
                    </div>
                    <span><a href="#">Theo dõi</a></span>
                </div>)  
            }
            </div>
        )
    }
}
    FollowUserListItem.propTypes = {
        user: PropTypes.arrayOf(PropTypes.shape({
            nick: PropTypes.string,
            avatarURL: PropTypes.string
        }))
    
    }

export default FollowUserListItem
