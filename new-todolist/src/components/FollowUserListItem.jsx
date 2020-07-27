import React, { Component } from 'react'
import './FollowUserListItem.css'

export class FollowUserListItem extends Component {


    render() {
        let {user} = this.props;
        return (
            <div>
                <img src="https://picsum.photos/50" alt="avatar"/>
                <div>
                    <span>{user.nick}</span>
                    <span>Gợi ý cho bạn</span>
                </div>
                <span><a href="#">Theo dõi</a></span>
            </div>
        )
    }
}

export default FollowUserListItem
