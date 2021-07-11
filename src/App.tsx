import React, {useState} from 'react';
import './scss/app.scss'
import {Header,Home,Cart} from "./components";
import {Route} from 'react-router-dom'







function App() {

  return (
      <div className="wrapper">

        <Header />

        <div className="content">

            <Route path={'/'} exact component={Home}/>
            <Route path={'/cart'} exact component={Cart}/>

        </div>
      </div>

  );
}

export default App;
