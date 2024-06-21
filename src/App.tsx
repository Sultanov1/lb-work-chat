import React from 'react';
import ChatForm from './components/ChatForm/ChatForm';
import ChatList from './components/ChatList/ChatList';

const App = () => {
  const sendMessages = async (message: string, author: string) => {
    try {
      const data = new URLSearchParams();
      data.set('author', author);
      data.set('message', message);
      await fetch(' http://146.185.154.90:8000/messages', {
        method: 'POST',
        body: data,
      });
    } catch (err) {
      console.log('Something went wrong', err);
    }
  };

  return (
    <div className="text-center">
      <ChatForm onSendMessage={sendMessages}/>
      <ChatList/>
    </div>
  );
};

export default App;