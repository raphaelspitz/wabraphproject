import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Books from '../../mocks/books.json'
import TopAuthorsTabs from './TopAuthorsTabs';
import ScrollableHorizontalNav from './ScrollableHorizontalNav';

function BookApp() {
  return (
    <div className="container">
      <div>
        <p>To do export pdf</p>
        <p>load more on table</p>
        <p>historgram and linear graph</p>
        <p>Scrollable tabs with useRef(lef right button done, mouse wheel done)</p>
        <p>Sort Table</p>
        <p>no data found on table</p>
        <p>Modal</p>

        <Filter Books={Books} />
        <div>
          <h4>Top 3 Best author descriptions</h4>
          <TopAuthorsTabs Books={Books} />
          <ScrollableHorizontalNav />
        </div>
      </div>
    </div>
  );
}

export default BookApp;
