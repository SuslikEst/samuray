import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <div className="app-content">
          <main className="content">
            <Route path="/dialogs" render={ () => <DialogsContainer store={ props.store } /> } />
            <Route path="/profile" render={ () => <Profile store={ props.store } /> } />
            <Route path="/news" render={ () => <News /> } />
            <Route path="/music" render={ () => <Music /> } />
            <Route path="/settings" render={ () => <Settings /> } />
          </main>
          <Sidebar />
        </div>
        <Footer />
      </div>
  );
};

export default App;
