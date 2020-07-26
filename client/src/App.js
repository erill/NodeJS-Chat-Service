import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { chatsFetchRequest } from "./store/actions";
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chats);

  const handleClick = () => {
    dispatch(chatsFetchRequest());
  };

  const renderChats = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Chat Id</th>
            <th>Messages Count</th>
            <th>Users</th>
          </tr>
        </thead>
        <tbody>
          {chats.data.map(chat => (
            <tr key={chat.chat_uuid}>
              <td>{chat.chat_uuid}</td>
              <td>{chat.messages_count}</td>
              <td>
                {chat.users.map((user, index) => 
                  <p key={`${user}-${index}`}>{user}</p>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const getContent = () => {
    if (chats.failure) {
      return <p>Oops! Something went wrong.</p>;
    } else if (chats.data) {
      return renderChats();
    }

    return null;
  }
  
  return (
    <div>
      <h1>Click this button to fetch Chats info</h1>
      <button onClick={handleClick}>Get chats</button>
      {getContent()}
    </div>
  );
}

export default App;