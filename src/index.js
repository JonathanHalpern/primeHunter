import React from 'react';
import { render } from 'react-dom';
import TextField from '@material-ui/core/TextField';
import PrimeFinder from './Components/PrimeFinder';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <PrimeFinder />
  </div>
);

render(<App />, document.getElementById('root'));
