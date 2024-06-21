import React, { useState, useEffect } from 'react';
import ChatForm from './components/ChatForm/ChatForm';
import ChatList from './components/ChatList/ChatList';
import { Message } from './types';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastDatetime, setLastDatetime] = useState<string | null>(null);

  const fetchMessages = async (datetime: string | null) => {
    try {
      const url = `http://146.185.154.90:8000/messages${datetime ? `?datetime=${datetime}` : ''}`;
      const response = await fetch(url);
      const newMessages = await response.json();
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
      if (newMessages.length > 0) {
        setLastDatetime(newMessages[newMessages.length - 1].datetime);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
        fetchMessages(lastDatetime);
      },
      2000);
    return () => clearInterval(interval);
  }, [lastDatetime]);

  const sendMessages = async (message: string, author: string) => {
    try {
      const data = new URLSearchParams();
      data.set('author', author);
      data.set('message', message);
      await fetch('http://146.185.154.90:8000/messages', {
        method: 'POST',
        body: data,
      });
    } catch (err) {
      console.log('Something went wrong', err);
    }
  };

  return (
    <div className="text-center">
      <ChatForm onSendMessage={sendMessages} />
      <ChatList messages={messages} />
    </div>
  );
};

export default App;
