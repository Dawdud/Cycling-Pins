import React, { useContext } from 'react';
import UserProvider from "../providers/UserProvider";
import { UserContext } from "../providers/UserProvider";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from "./auth/signUp";
import ProfilePage from "./Profile/profilePage";
import SignIn from "./auth/signIn";


function Home() {
  const user = useContext(UserContext);



  return (
    user ?
      <ProfilePage />
      :

      < BrowserRouter >
        <Switch>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter >
  );
}
export default Home;