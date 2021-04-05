import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {HomePage} from "./pages/home/HomePage";

const App: React.FC = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <HomePage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;
