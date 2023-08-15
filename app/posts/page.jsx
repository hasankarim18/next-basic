"use client"
import Menu from '@/components/Menu';
import SinglePost from '@/components/SinglePost';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const postUrl = "https://jsonplaceholder.typicode.com/posts";

const Page = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
     (async ()=> {
        const res = await fetch(postUrl)
        const data = await res.json()
        setPosts(data)
        setIsLoading(false)
     })()
     
    }, [])
    
    return (
      <div className="container mx-auto">
        <Menu />
        <h1 className="text-3xl">Json Typicode Posts:</h1>
        <button
          className="p-4 bg-blue-300"
          onClick={() => {
            alert("Hello world");
          }}
        >
          Click
        </button>
        <div className="mt-4 grid grid-cols-2">
          <div>
            <ul>
              {(() => {
                if (isLoading) {
                  return <h1 className="text-4xl">Loading...</h1>;
                } else {
                  return posts.slice(0, 10).map((item) => (
                    <li key={item.id}>
                      <Link
                        className="text-black hover:text-red-400"
                       // replace
                      // prefetch
                        href={{
                          pathname: "/posts/post",
                          query: { postId: item.id, title: item.title },
                        }}
                      >
                        {" "}
                        <span>{item.id}. </span>
                        {item.title}
                      </Link>
                    </li>
                  ));
                }
              })()}
            </ul>
          </div>
          <div>
                <SinglePost id={1} />
          </div>
        </div>
      </div>
    );
};

export default Page;