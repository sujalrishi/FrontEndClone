import { Avatar, IconButton } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFile from '@material-ui/icons/AttachFile';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import React, { useState } from 'react';
import './Chat.css';
import axios from './axios';

function Chat({ messages }) {
    const [input, setInput] = useState("")
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("messages/new",{
            message: input,
            name: "demo",
            timestamp: "just Now",
            receieved: true,
        })

        setInput('');
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {messages.map((message) => (
                    <p className={`chat_message ${message.receieved && 'chat_reciever'}`}>
                        <span className="chat_name">{message.name}</span>

                        {message.message}

                        <span className="chat_timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}
                {/* <p className="chat_reciever chat_message">
                    <span className="chat_name">Sujal</span>

                    this is a message

                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> */}
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
