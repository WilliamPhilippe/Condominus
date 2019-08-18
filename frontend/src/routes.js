import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import Home from './componets/home/home';
import Access from './componets/access/access';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/access/:type" component={Access} />       
        </BrowserRouter>
    );
}