import React from 'react';
type ChildProps  = {
  Books?: any,
};
const Table: React.FC<ChildProps> = (props) => {
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
        {props.Books.map((book:any,index:any) =>
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
