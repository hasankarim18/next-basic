import React from 'react';
import classes from './page.module.css'
import Menu from '@/components/Menu';

const page = () => {
    return (
      <div className={classes.bgoragne}>
        <Menu />
        <h1 className="text-6xl global-text">This is about page</h1>
        <div></div>
      </div>
    );
};

export default page;