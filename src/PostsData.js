import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setComments(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  return (
    <div className='postdata'>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className='postdata'>
            {post.id}: {post.title}
            <button
              onClick={(e) => setId(e.target.value)}
              className='commentButton'
            >
              Show Comments
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
