import React, {useEffect} from 'react';
import { BrowserRouter, Route , Switch } from "react-router-dom";
import './App.css';
import SignUp from './Pages/SignUp';
import 'antd/dist/antd.css';
import './Helper/Global'
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import Auth from './Helper/Auth';





function App() {

  useEffect(() => {
    Auth.getLocal()
  }, [])
  
  return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        </Switch>
    </BrowserRouter>
  
  );
}

export default App;
