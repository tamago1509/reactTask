import React from 'react';
import './Notification.css'

function Notification() {
    
    let hasUnread= true;
    return (
        <div class="noti">
           <img src="https://image.flaticon.com/icons/svg/3011/3011153.svg" />
           {
               hasUnread && <div className="red-round"></div>
               

           }
                 
        </div>
    )
}

export default Notification
