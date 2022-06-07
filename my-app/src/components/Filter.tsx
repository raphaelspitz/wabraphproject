import React, { useState } from 'react';
type ChildProps  = {
  children?: React.ReactNode,
  setInputValue: (arg: string) => void
};
const Filter: React.FC<ChildProps> = (props) => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex mb-5">
        <div className="form-group col-8 p-0">
            <input type="Search" className="form-control" placeholder="Searcg" 
              onChange={(event)=>props.setInputValue(event.target.value)} />
        </div>
        <div className="col-4">
          <button className="btn btn-secondary dropdown-toggle w-100" type="button">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
