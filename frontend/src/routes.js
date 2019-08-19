import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import Home from './componets/home/home';
import Access from './componets/access/access';
import ownerPainel from "./componets/owner/painel/ownerPainel";
import admPainel from "./componets/adm/painel/admPainel";
import doormanPainel from "./componets/doorman/painel/doormanPainel";

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/access/:type" component={Access} />
            <Route path="/adm/:_id/:user"  component={admPainel} />
            <Route path="/owner/:_id/:user"  component={ownerPainel} />       
            <Route path="/doorman/:_id/:user"  component={doormanPainel} />      
        </BrowserRouter>
    );
}