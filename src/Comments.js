import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Comments({}) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${1}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className='commentdata'>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
