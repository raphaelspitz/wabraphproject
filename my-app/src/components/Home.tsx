import React, { useState } from 'react';
import Filter from './Filter';
import Table from './Table';
import Books from '../mocks/books.json'

function Home() {
  const [books, setBooks] = useState(Books);
  const [booksTemp] = useState(Books);

  const setInputValue = (name: string):void => {
    let filter = booksTemp.filter(value => {
     return value.author.includes(name);
    });
    
    filter = filter ? filter : booksTemp;
    setBooks(filter);
  }

  return (
    <div className="Home">
      <div>
        <Filter setInputValue={setInputValue} />
        <Table Books={books} />
      </div>
    </div>
  );
}

export default Home;
