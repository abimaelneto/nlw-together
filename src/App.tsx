import React, {createContext, useState, useEffect} from 'react';
import '../src/styles/global.scss';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import {BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from '../src/contexts/AuthContext';

function App() {
  
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
    
  );
}

export default App;