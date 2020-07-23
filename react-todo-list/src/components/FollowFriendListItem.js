import React from 'react'
import RecommendedFriend from './RecommendedFriend';
import './FollowFriend.css';





function FollowFriendListItem() {
    const friends = [
        {nick: "phong0908" },
        {nick: "lien176" },
        {nick: "linhlee" },
        {nick: "thanhthanh" },
        {nick: "tan97" }
      ]
    const friendList = friends.map((friend,index)=>
        <RecommendedFriend key ={index} friend = {friend} />
    )
    return (
        <div>
            <table className= "table">
                <tr className= "head">
                    <th >Gợi ý cho bạn</th>
                    <th></th>
                    <th>Xem tất cả</th>

                </tr>
            {friendList}
               
            </table>  
        </div>
    )
}

export default FollowFriendListItem
