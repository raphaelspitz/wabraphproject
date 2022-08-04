import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Books from '../../mocks/books.json'
import TopAuthorsTabs from './TopAuthorsTabs';
import ScrollableHorizontalNav from './ScrollableHorizontalNav';
import ModalBook from './ModalBook';
import PdfDownloader from './PdfDownloader';

function BookApp() {
  const [isOpen, setisOpen] = useState(false)
  const [isOpen2, setisOpen2] = useState(false)

  return (
    <div className="container mt-6-rem">
      <div>
      <h1 data-testid="h1" className="mb-3">React app with typscript and bootstrap 4 and jest</h1>
      <h4>Modal with Portal api (inside you will see things that i m planning to finish on this page</h4>
      <button onClick={() => setisOpen(true)}>Open Modal</button>
      <button onClick={() => setisOpen2(true)}>Open second Modal</button>
      <ModalBook
            container={document.body as HTMLElement} 
            open={isOpen} onClose={() => setisOpen(false)}>
              <h4>Todo</h4>
              <p>historgram and linear graph</p>
              <p>no data found on table</p>
              <p>toaster component</p>
              <p>Loading ...</p>
              <h4>in Progress</h4>
              <p>To do export pdf (in progress)</p>
              <p>Sort Table (in progress)</p>
              <h4>Done</h4>
              <p>Table</p>
              <p>load more on table</p>
              <p>Scrollable tabs with useRef(left right button done, mouse wheel done)</p>
              <p>Modal (done)</p>
              <p>Manage multiple modals</p>
              <p>cliking outside of side bar to close it(again with useRef done)</p>
              <p>avoiding side effect jump when we toggle filter btn(done)</p>
      </ModalBook>
      <ModalBook
            container={document.body as HTMLElement} 
            open={isOpen2} onClose={() => setisOpen2(false)}>
              <p>TEST</p>
      </ModalBook>
      <h4 className="mt-5">Filter Compornent</h4>
      <Filter Books={Books} />
        <div>
          <h4 className="mt-5">Tab component</h4>
          <TopAuthorsTabs Books={Books} />
          <ScrollableHorizontalNav />
          <ScrollableHorizontalNav />
          <h4 className="mt-5">Donwload pdf no library used</h4>
          <PdfDownloader />
        </div>
      </div>
    </div>
  );
}

export default BookApp;
