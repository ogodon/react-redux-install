import React from 'react';
import { Link } from 'react-router';

import NameProvider from './propsComponent/NameProvider';
import Me from './components/me';
import You from './components/you';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <p>My App Title</p>
            <Link to={'me'}>My page</Link>
            <Link to={'you'}>Your page</Link>
          </div>
        </div>
        <NameProvider>
          <Me />
          <You />
        </NameProvider>
      </div>
    );
  }
}

export default App;
