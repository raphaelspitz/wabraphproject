import React from 'react';
import Filter from './Filter';
import Table from './Table';

function Home() {
  return (
    <div className="Home">
      <div>
        <Filter />
        <Table />
      </div>
    </div>
  );
}

export default Home;
