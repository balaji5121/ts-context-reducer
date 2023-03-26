import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { createContext, useReducer, Provider } from "react";
import { IUserObject } from "./Interfaces/model";
import { Actions, UserInfoObject, userInfoReducer } from "./Store/UserReducer";
import Home from "./Components/Home";
import Component1 from "./Components/Component1";

export const UserInfoContext = createContext<undefined | {} | any>({});

function App() {
  const [userState, userDispatch] = useReducer(userInfoReducer, UserInfoObject);
  return (
    <div>
      <UserInfoContext.Provider value={{ userState, userDispatch }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/component" component={Component1} />
        </Switch>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
