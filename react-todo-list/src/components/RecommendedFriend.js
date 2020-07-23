import React from 'react';
import "./RecommendedFriend.css";



function RecommendedFriend({friend}) {
    return (
        
            
            <tr>
                <td className="image">
                    <img src="https://picsum.photos/50" />
                    
                </td>
                <td className="name">
                    <span><strong>{friend.nick}</strong></span>
                    <span className="sub">Gợi ý cho bạn</span>
                </td>
                <td class="follow">
                    <a href="#">Theo dõi</a>
                </td>
            </tr>
           
           
       
    )
}

export default RecommendedFriend

