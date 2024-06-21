import React from 'react';
import {Message} from '../../types';
import './ChatList.css';

interface Props {
  messages: Message[];
}
const ChatList: React.FC<Props> = ({messages}) => {
  const lastMessages = messages.slice(-10);

  return (
    <div className='chat overflow-y-scroll'>
      {lastMessages.map((msg) => (
        <div key={msg._id}>
          <div><strong className='fs-5'>{msg.author}:</strong> {msg.message}</div>
          <div className='datetime'>{new Date(msg.datetime).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;