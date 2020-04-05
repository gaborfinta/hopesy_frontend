import React, {useState, useContext} from 'react';
import _ from "lodash";
import { Router, Route } from "react-router-dom";
import history from "./history";

import UserContext from './contexts/UserContext';
import NavBar from './components/navigation/NavBar';
import Profie from './pages/Profile';
import FAQs from './pages/FAQs';
import Donaters from './pages/Donaters';
import CharityEvents from './pages/CharityEvents';
import WelcomePage from './pages/WelcomePage';

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { styles } from './style';

function App() {
  
  const [user, setUser] = useState({})
  const themeDark = createMuiTheme({
    palette: {
      background: {
        default: styles.background
      }
    }
  });

  return (
    <div>
      {!_.isEmpty(user) ? 
      <MuiThemeProvider theme={themeDark}>
      <CssBaseline />
        <UserContext.Provider value={user}>
          <Router history={history}>
            <Route path="/" component={NavBar} />
            <Route path="/profile" component={Profie} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/donaters" component={Donaters} />
            <Route path="/events" component={CharityEvents} />
          </Router>
        </UserContext.Provider>
        </MuiThemeProvider>
        :
        <WelcomePage setUser={setUser}/>
      }
    </div>
      
  );
}

export default App;
