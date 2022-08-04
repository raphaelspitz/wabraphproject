import React, { useState } from 'react';
type ChildProps  = {
  Books?: any,
  sorting: (field:string) => void
};
const Table: React.FC<ChildProps> = (props) => {


  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" onClick={() => props.sorting('author')}>Author</th>
            <th scope="col">Country</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {props.Books.map((book:any,index:any) =>
            <tr key={index}>
                <td>{book.author}</td>
                <td>{book.country}</td>
                <td>{book.year}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
