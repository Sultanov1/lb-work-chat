import React, {useState} from 'react';

interface Props {
  onSendMessage: (message: string, author: string) => void;
}

const ChatForm: React.FC<Props> = ({onSendMessage}) => {
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message && author) {
      onSendMessage (message, author);
      setMessage('');
      setAuthor('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required/>
      </label>
      <label>
        Type your message
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required/>
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatForm;