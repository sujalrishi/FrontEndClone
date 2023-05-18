import React from 'react'
import "./Chat.css"
function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName"><strong>#general $</strong></h4>
                </div>


                <div className="chat_headerRight">
                    <p># Details</p>
                </div>
            </div>
        </div>
    )
}

export default Chat
