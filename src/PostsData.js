import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='postdata'>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className='postdata'>
            {post.id}: {post.title}
            <button className='commentButton'>
              <Link to='/comments'>Comments</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
