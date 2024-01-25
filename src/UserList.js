// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import the styles for UserList

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once after the initial render

    const handleUserClick = (userId) => {
        setSelectedUser(userId === selectedUser ? null : userId);
    };

    return (
        <div>
            <h2>List of Users</h2>
            <ul>
                {listOfUsers.map(user => (
                    <li
                        key={user.id}
                        className={user.id === selectedUser ? 'selected' : ''}
                        onClick={() => handleUserClick(user.id)}
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;