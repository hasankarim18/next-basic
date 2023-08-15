"use client"
import Menu from '@/components/Menu';
import React from 'react';
import { useSearchParams } from 'next/navigation';


const Page = () => {
    const params = useSearchParams()
   // console.log(params);
    return (
      <div>
        <Menu />
        <div className="container mx-auto">
          <h1>Single Post</h1>
          <h2 className="text-3xl mt-4 text-bold">
            Post id: {params.get('postId')}
          </h2>
          <h2 className="text-3xl mt-4 text-bold">
            Title: {params.get('title')}
          </h2>
        </div>
      </div>
    );
};

export default Page;