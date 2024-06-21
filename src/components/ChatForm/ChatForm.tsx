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
    <form onSubmit={handleSubmit} className='d-flex align-items-center justify-content-center mt-2'>
      <label className='me-3'>
        Enter your name
        <input
          className='form-control'
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required/>
      </label>
      <label className='me-2'>
        Type your message
        <input
          className='form-control'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required/>
      </label>
      <button
        className='btn btn-primary btn-md mt-4'
        type="submit">Send</button>
    </form>
  );
};

export default ChatForm;