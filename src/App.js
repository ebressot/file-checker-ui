import React from 'react';
import FileCheckSection from './FileCheckSection';
import data from './scd_securities.20200321';

function App() {
  return (
      <FileCheckSection data={data} />
  );
}

export default App;
