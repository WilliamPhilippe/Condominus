import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import Home from './componets/home/home';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />       
        </BrowserRouter>
    );
}