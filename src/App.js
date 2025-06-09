
import './App.css';
import Nav from './components/Nav';
import Login from './login/Login';
import Signup from './login/Signup';
import { Switch, Route, Redirect } from "react-router-dom";

import Home from './Home';
import Error from './components/Error';
import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode"
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Thems"
import Toggle from "./Toggler";
import data from "./recipes.json";
import One from './menu/One';
import ScrollToTop from "./ScrollToTop"; // اضافه کن


function App() {



  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = (theme === 'light') ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />
  return (

    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <Nav />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <ScrollToTop />
        <Switch >
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {data.map((data) => <Route key={data.foodID} path={'/' + data.title}><One data={data}></One></Route>)}
          <Route path="/Error" component={Error} />
          <Route exact path="/" component={Home} />
          <Redirect to="/Error" />
        </Switch>
      </div>
    </ThemeProvider>


  )
}

export default App;
