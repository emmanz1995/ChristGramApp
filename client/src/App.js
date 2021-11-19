import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Signin from './components/page/signin/Signin';
import Signup from './components/page/signup/Signup';
import Home from './components/page/home/Home';
import Profile from './components/page/profile/Profile';
import CreatePost from './components/page/createPost/CreatePost';
import PrayerRequest from './components/page/prayerRequest/PrayerRequest';
import CreatePrayerReq from './components/page/createPrayerReq/CreatePrayerReq';
import { PrivateRoute } from './privateRoute';

const GlobalStyles = createGlobalStyle`
  * {
   box-sizing: border-box; 
  }
  body {
    font-family: 'Inconsolata', monospace;
    background: ${props => props.theme.MainColor};
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/createpost" component={CreatePost} />
          <PrivateRoute path="/prayer-request" component={PrayerRequest} />
          <PrivateRoute path="/create-prayer" component={CreatePrayerReq} />
      </Switch>
    </div>
  );
}

export default App;
