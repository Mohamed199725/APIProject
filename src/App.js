// src/App.js
import React from 'react';
import UserList from './UserList';
import './App.css'; // You can style your app in App.css

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList />
      </header>
    </div>
  );
}

export default App;