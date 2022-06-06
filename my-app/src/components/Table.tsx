import React from 'react';
import Books from '../mocks/books.json'

function Table() {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Country</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        {Books.map( (book,index) =>
          <tr key={index}>
              <td>{book.author}</td>
              <td>{book.country}</td>
              <td>{book.year}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
