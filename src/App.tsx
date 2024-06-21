import ChatForm from './components/ChatForm/ChatForm';
import ChatList from './components/ChatList/ChatList';
import {useState} from 'react';

const App = () => (

  <div className="text-center">
    <ChatForm/>
    <ChatList/>
  </div>
);

export default App;
