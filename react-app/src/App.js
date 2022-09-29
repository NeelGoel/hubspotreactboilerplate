import React from 'react';
import './App.scss';
import SpinningLogo from './components/SpinningLogo';
import NAStrategy from './components/naStrategy/naStrategy';
import Card from './components/Card';
import sprocketLogo from './images/sprocket.svg';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  return (
        <>
        <NAStrategy data={moduleData}/>
        </>

  );
}

export default App;
