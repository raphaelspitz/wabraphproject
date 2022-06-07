import React, { useState } from 'react';
type ChildProps  = {
  children?: React.ReactNode,
  setInputValue: (arg: string) => void
};
const Filter: React.FC<ChildProps> = (props) => {
  const iniTialClassNameDropDown = 'dropdown-menu border mt-0 position-relative top-0';
  const [classNameDropDownMenu] = useState(iniTialClassNameDropDown);
  const [isFilterBtnToggled, setIsFilterBtnToggled] = useState(false);
  const toggleFilter = () => setIsFilterBtnToggled(value => !value);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex mb-5">
        <div className="form-group col-8 p-0">
            <input type="Search" className="form-control" placeholder="Searcg" 
              onChange={(event)=>props.setInputValue(event.target.value)} />
        </div>
        <div className="col-4 d-flex flex-column">
          <div className={isFilterBtnToggled ? 'dropup' : ''}>
          <button onClick={toggleFilter} className="btn btn-secondary dropdown-toggle w-100" type="button">
            Filter
          </button>
          </div>
          <div className={isFilterBtnToggled ? classNameDropDownMenu + ' show' : classNameDropDownMenu}>
            <div className="form-check form-check-inline d-flex justify-content-between p-2">
              <div>
                <input className="form-check-input" type="checkbox" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">France</label>
              </div>
              <div>
                <input className="form-check-input" type="checkbox" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">Italian</label>
              </div>
              <div>
                <input className="form-check-input" type="checkbox" value="option3" />
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
