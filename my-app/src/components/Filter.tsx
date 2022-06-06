import React from 'react';

function Filter() {
  return (
    <div className="d-flex">
      <div className="form-group col-8 p-0">
          <input type="Search" className="form-control" placeholder="Searcg" />
      </div>
      <div className="col-4">
        <button className="btn btn-secondary dropdown-toggle w-100" type="button">
          Filter
        </button>
      </div>
    </div>
  );
}

export default Filter;
