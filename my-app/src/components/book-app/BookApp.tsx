import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Books from '../../mocks/books.json'

function BookApp() {

  return (
    <div className="container">
      <div>
        <Filter Books={Books} />
      </div>
    </div>
  );
}

export default BookApp;
