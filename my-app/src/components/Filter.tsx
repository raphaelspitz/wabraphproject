import React, { useState } from 'react';
type ChildProps  = {
  children?: React.ReactNode,
  handleFilterChange: (arg: string, arg2: string) => void
};
const Filter: React.FC<ChildProps> = (props) => {
  const classNameDropDown = 'dropdown-menu border mt-0 position-relative top-0';
  const [isFilterBtnToggled, setIsFilterBtnToggled] = useState(false);
  const toggleFilter = () => setIsFilterBtnToggled(value => !value);
  
  const setInputValue = (event:any) => {
    emitInputAndCheckboxes("input", event.target.value);
  }
  
  const setCheckboxValue = (event:any) => {
    emitInputAndCheckboxes("box", event.currentTarget.name);
  }

  const emitInputAndCheckboxes = (inputType:string, inpput:string) => {
    props.handleFilterChange(inputType, inpput);
  } 

  return (
    <div className="d-flex flex-column">
      <div className="d-flex mb-5">
        <div className="form-group col-8 p-0">
            <input type="Search" className="form-control" placeholder="Searcg" 
              onChange={setInputValue} />
        </div>
        <div className="col-4 d-flex flex-column">
          <div className={isFilterBtnToggled ? 'dropup' : ''}>
          <button onClick={toggleFilter} className="btn btn-secondary dropdown-toggle w-100" type="button">
            Filter
          </button>
          </div>
          <div className={isFilterBtnToggled ? classNameDropDown + ' show' : classNameDropDown}>
            <div className="form-check form-check-inline d-flex justify-content-between p-2">
              <div>
                <input name="France" onClick={setCheckboxValue}
                   className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">France</label>
              </div>
              <div>
                <input name="Italy" onClick={setCheckboxValue} className="form-check-input" type="checkbox" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">Italian</label>
              </div>
              <div>
                <input name="United Kingdom" onClick={setCheckboxValue} className="form-check-input" type="checkbox" value="option3" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">UK</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
