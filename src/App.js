import React, {useState, useContext} from 'react';
import _ from "lodash";
import { Router, Route } from "react-router-dom";
import history from "./history";

import UserContext from './contexts/UserContext';
import NavBar from './components/navigation/NavBar';
import Profie from './pages/Profile';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Donaters from './pages/Donaters';
import CharityEvents from './pages/CharityEvents';


function App() {
  
  // Dummy data for testing
  const [user, setUser] = useState({
    firstName: 'Levente',
    lastName: 'Fodor',
    isValidated: true,
    Age: 24,
    memberShip: 'Gold',
    profilePictureUrl: "https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg"
  })

  // const [user, setUser] = useState({})

  return (
    <div>
      {!_.isEmpty(user) ? 
        <UserContext.Provider value={user}>
          <Router history={history}>
            <Route path="/" component={NavBar} />
            <Route path="/profile" component={Profie} />
            <Route path="/about" component={About} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/donaters" component={Donaters} />
            <Route path="/events" component={CharityEvents} />

          </Router>
        </UserContext.Provider>
        :
        <p>Welkome bicsiz</p>
      }
    </div>
      
  );
}

export default App;
