import './App.css';
import React, {Suspense} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {renderRouteAdmin, renderRoutesHome} from "./routes"; 
import PageNotPound from './containers/PageNotFound';
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
     <BrowserRouter>
     <Switch>
        {renderRoutesHome()}
       {renderRouteAdmin()}

       <Route path="/page-not-found" component={PageNotPound}/>

     </Switch>
     </BrowserRouter>
    </Suspense>
  );
}

export default App;
