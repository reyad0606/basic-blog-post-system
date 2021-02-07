import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className='userdata'>
            <h3>{user.name}</h3>
            <h5>{user.email}</h5>
            <h5>{user.address.city}</h5>
            <h5>{user.website}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersData;
