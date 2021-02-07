import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
  const [comments, setComments] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{comments}</h1>
    </div>
  );
}

export default Comments;
