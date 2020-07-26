import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { chatsRequested } from "./store/actions";
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chats);

  const handleClick = () => {
    dispatch(chatsRequested());
  };

  const renderChats = () => {
    return (
      <table>
        <tr>
          <th>Chat Id</th>
          <th>Messages Count</th>
          <th>Users</th>
        </tr>
        {chats.map(chat => (
          <tr>
            <td>{chat.chat_uuid}</td>
            <td>{chat.messages_count}</td>
            <td>{chat.users}</td>
          </tr>
        ))}
      </table>
    );
  }
  
  return (
    <div className="App">
      <h1>Click this button to fetch Chats info</h1>
      <button onClick={handleClick}>Get chats</button>
      {chats && renderChats()}
    </div>
  );
}

export default App;