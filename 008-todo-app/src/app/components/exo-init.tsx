import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=ta`)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [] );

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
