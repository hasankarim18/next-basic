"use client"
import { useRouter } from 'next/navigation';
import Menu from '@/components/Menu';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  const router = useRouter()
  const goto = (path)=> {
    router.push(path)
  }
  return (
    <div className="container mx-auto">
      <Menu />
      <h1>This is Home page</h1>
      <div className="m-4">
        <button onClick={()=> {goto('/posts')}} className="btn py-2 px-4 bg-blue-400 rounded-lg ">Goto Post</button>
      </div>
      <div>
        {/* <img src="/images/laptop.jpg" alt="" /> */}
        <Image width={500} height={500} src="/images/laptop.jpg" alt="laptop" />
      </div>
    </div>
  );
};

export default Page;