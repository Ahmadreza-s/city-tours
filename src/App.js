import React from 'react';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar/Navbar';
import Tours from './components/Tours/Tours';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/home'>
                    <Home/>
                </Route>
                <Route path='/tours'>
                    <Tours/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Redirect to='/tours'/>
            </Switch>
        </div>
    );
}

export default App;
