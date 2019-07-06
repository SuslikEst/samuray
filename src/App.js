import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="app-content">
          <main className="content">
            <Route path="/dialogs" render={ () => <DialogsContainer store={ props.store } /> } />
            <Route path="/profile/:userId?" render={ () => <ProfileContainer store={ props.store } /> } />
            <Route path="/users" render={ () => <UsersContainer /> } />
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
