const ChatForm = () => {
  return (
    <form>
      <label>
        Enter your name
        <input
          type="text"
          required/>
      </label>
      <label>
        Type your message
        <input
          type="text"
        required/>
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatForm;