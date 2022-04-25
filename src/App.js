 
import './App.css';
import  Nav from './components/Nav';
import Login from './login/Login';
import Signup from './login/Signup';
import {Switch, Route,Redirect} from "react-router-dom";
import Four from './menu/Four';
import Home from './Home';
import Error from './components/Error';
import React  from "react";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./useDarkMode"
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Thems"
import Toggle from "./Toggler";
 import data from "./recipes.json";
 import Five from './menu/Five';
 import One from './menu/One';
 
function App() {
 
 
 const time=new Date();
 const hour=time.getHours();
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = ( theme === 'light' )  ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <Five> 
     <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <div className="App">
       <Nav/>
       <Toggle theme={theme} toggleTheme={themeToggler} />
<Switch >
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {data.map((data) => <Route key={data.foodID} path={'/' + data.title}><One data={data}></One></Route>)}
        <Route path="/Error"   component={Error}   />
        <Route exact path="/" component={Home}/>
        <Redirect to="/Error" />
 </Switch>
   </div> 
  </ThemeProvider>
 </Five>
 
  ) 
} 

export default App;
