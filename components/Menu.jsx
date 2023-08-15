"use client"
import {usePathname} from 'next/navigation'
import Link from 'next/link';
import React from 'react';

const Menu = () => {
    const currentPath = usePathname()
   
    return (
        <div className="container mx-auto py-4">
            <ul className="flex gap-8">
                <li className={` rounded-md ${currentPath === '/' ? 'active-link' :'pending-link'}`}>
                <Link  className="p-2 inline-block"
                 href={"/"} >Home</Link>
                </li>
                <li className={` rounded-md ${currentPath === '/product' ? 'active-link' :'pending-link'}`}>
                    <Link 
                     prefetch
                     className="p-2 inline-block"
                     href={{pathname:"/product",query:{name:"book", price:"200Taka"} }} 
                     >Product</Link>
                </li>
                <li className={` rounded-md ${currentPath === '/profile' ? 'active-link' :'pending-link'}`}>
                    <Link className="p-2 inline-block"
                     href={"/profile"} >Profile</Link>
                </li>
                <li className={` rounded-md ${currentPath === '/posts' ? 'active-link' :'pending-link'}`}>
                    <Link className="p-2 inline-block"
                     href={"/posts"} >Posts</Link>
                </li>
                <li className={` rounded-md ${currentPath === '/dashboard' ? 'active-link' :'pending-link'}`}>
                    <Link className="p-2 inline-block"
                     href={"/dashboard"} >Dashboard</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;