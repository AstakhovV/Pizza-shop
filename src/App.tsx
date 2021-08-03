import './App.css';
import * as React from 'react'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";


export const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/cart' component={Cart}/>
            </div>
      </div>
  );
}
