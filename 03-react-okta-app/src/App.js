import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';

const config = {
  issuer: 'https://dev-977591.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oacroeeg43id9AnQ0h7'
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri} >
          <SecureRoute path='/' exact={true} component={Home}/>
          <SecureRoute path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
//
// const config = {
//   issuer: 'https://dev-977591.oktapreview.com/oauth2/default',
//   redirectUri: window.location.origin + '/implicit/callback',
//   clientId: '0oacroeeg43id9AnQ0h7'
// }
//
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
