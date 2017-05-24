import React from 'react';

// Components
import Navbar      from '../components/Navbar';
import MyComponent from '../components/MyComponent';
import LeftNav     from '../components/LeftNav';

const App = () => (
  <div>
    <Navbar />
    <LeftNav />
    <MyComponent />
  </div>
);

export default App;