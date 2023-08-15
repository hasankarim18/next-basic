
import React from 'react';

const getSinglePost = async (id)=> {
    const singlePostUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const res = await fetch(singlePostUrl)
    const data = await res.json()

    return data


}

const SinglePost = async ({ id }) => {
    const data = await  getSinglePost(id)
  // console.log(data);
  return <div>
    single postid: {id}
    <hr/>
    <h2>{data.title}</h2>
  </div>;
};

export default SinglePost;