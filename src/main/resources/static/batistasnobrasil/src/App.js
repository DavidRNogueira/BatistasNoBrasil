import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import {Router, Route} from "react-router-dom"
import ChurchList from './Components/ChurchList/ChurchList';
import SoulwinningGroups from './Components/SoulwinningGroups/SoulwinningGroups'
import {createBrowserHistory} from "history"

export const history = createBrowserHistory();

const App = () => {
  return (
    <>
      <NavBar/>
      <Router history={history}>
        <Route exact path="/" component={ChurchList}/>
        <Route path="/evangelizar" component={SoulwinningGroups}/>
      </Router>
    </>
  )
}

export default App;
