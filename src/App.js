import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs
            users={props.state.dialogsPage.users}
            massage={props.state.dialogsPage.massage} 
            store={props.store} />} />
          <Route path='/profile' render={() => <Profile posttData={props.state.profilePage.posttData} 
                  dispatch={props.dispatch}
                  postText={props.state.profilePage.postText}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;