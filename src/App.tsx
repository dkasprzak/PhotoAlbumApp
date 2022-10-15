import { FC } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import { Home } from './Components/Home/home';
import { Posts } from './Components/Posts/posts';

export const App : FC = () => {
  return (
    <BrowserRouter>
        <img src= {'${process.env.PUBLIC_URL}/logo192.png'} alt=""/> 
        <div>
          <>{console.log('test')}</>;
          <Link to="Posts">Posts</Link>
          <Link to="/">Home</Link>
        </div>
        <Routes>
          <Route path='Posts' element={<Posts/>}/>
          <Route index element = {<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
};