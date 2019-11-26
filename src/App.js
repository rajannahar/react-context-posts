import React from 'react';
import { GlobalProvider } from './GlobalContext';
import Posts from './components/Posts';


function App() {
  return (
    <div className="App">
      <h1>Hi 123</h1>
      <GlobalProvider>
        <Posts />
      </GlobalProvider>
    </div>
  );
}

export default App;
