import React, { useEffect, useState } from 'react';
import { Book } from './book';
import Table from './Table';

type ChildProps  = {
  children?: React.ReactNode,
 // handleFilterChange: (arg: string, arg2: string) => void
   Books?: any,
};
const Filter: React.FC<ChildProps> = (props) => {
  const classNameDropDown = 'dropdown-menu border mt-0 position-relative p-0 top-40-px';
  const [isFilterBtnToggled, setIsFilterBtnToggled] = useState(false);
  const [inputText, setInputText] = useState<string>('');
  const [inputTextTemp, setInputTextTemp] = useState<string>('');
  const [checkboxes, setCheckboxes] = useState<string[]>([]);
  const [books, setJSONArray] = useState<Book[]>(props.Books);
  const [filterTempArray] = useState<Book[]>(props.Books);
  const toggleFilter = () => setIsFilterBtnToggled(value => !value);
  const [loadMoreTupplesToshow, setLoadMoreTupplesToshow] = useState(3);
  const [order, setorder] = useState("ASC");

  // obliger d'utiliser le useEffect si on veut détecter chaque changement dans le dom
  useEffect(() => {
  // let filter = getFilterJSONArray();
  if(inputTextTemp.length > inputText.length) {
    setLoadMoreTupplesToshow(3);
  }
  let sliceFiler = getFilterJSONArray().slice(0,loadMoreTupplesToshow);
  
  setJSONArray(sliceFiler);
  setInputTextTemp(inputText);
  }, [checkboxes, inputText, loadMoreTupplesToshow]);

  const setInputValue = (event:any) => {
    handleFilterChange("input", event.target.value);
  }
  
  const setCheckboxValue = (event:any) => {
    handleFilterChange("box", event.currentTarget.name);
  }

  const handleFilterChange = (inputType: string, input:string):void => {
    if(inputType == 'input') {
      setInputText(input);
    } else {
        let index = checkboxes.indexOf(input);
        if(index == -1) {
          // addCheckbox
          setCheckboxes([...checkboxes, input]);
        } else {
          //removeCheckbox
            let array = [...checkboxes]; // make a separate copy of the array
            array.splice(index, 1);
            setCheckboxes(array);
        }
    }
  }

  const getFilterJSONArray = () => {
    let filter = filterTempArray.filter(value => {
      // si toutes les checkbox sont vide mais qu'on fait une recherche que avec input
      if(checkboxes.length == 0 && inputText.length >= 0) {
        return searchOnlyFromInput(value);
      }
      //ici on doit gérer si 1 ou plusieurs checkbox sont cliqués mais que input text est vide
        if(checkboxes.length > 0 && inputText.length == 0) {
        return searchOnlyWithcheckboxes(value);
        } 
        // si une ou plusieurs checkbox sont cliqué et que inputext est pas vide
        if(checkboxes.length > 0 && inputText.length > 0)  {
            return searchWithcheckboxesAndInput(value);
        }    
    });
  
  return filter = filter ? filter : filterTempArray;
  }

  const loadMore = () => {
    setLoadMoreTupplesToshow(loadMoreTupplesToshow+3)
  }

  const searchOnlyFromInput = (value:any) => {
    let keys = ["author", "country"];
  // exemple pour filter uniquement sur 2 propriété du tableau    
    return keys.some((k) => 
     value[k].toString().toLowerCase().includes(inputText.toLowerCase()));
  
  // pour filter sur toute les valeur du tableau de manière générique    
    // return Object.keys(value).some((k) => 
    // value[k].toString().toLowerCase().includes(inputText.toLowerCase()));
  }

  const searchOnlyWithcheckboxes = (value:any) => {
    for (let index = 0; index < checkboxes.length; index++) {
      if(value.country.toLowerCase() == checkboxes[index].toLowerCase())
        return (value.country.toLowerCase() == checkboxes[index].toLowerCase());
    }
  }

  const searchWithcheckboxesAndInput = (value:Book) => {
    for (let index = 0; index < checkboxes.length; index++) {
      if(value.country.toLowerCase() == checkboxes[index].toLowerCase() && 
      (value.author.toLowerCase().includes(inputText.toLowerCase()))
      )
        return (value.country.toLowerCase() == checkboxes[index].toLowerCase())
        && (value.author.toLowerCase().includes(inputText.toLowerCase()))
    }
  }

  const sorting = (data:string) => {
    let sorted:Book[] = [];
    if(order === 'ASC') {
      sorted = [...books].sort((a:any, b:any) => (a[data].toLowerCase() > b[data].toLowerCase() ? 1 : -1));
      setorder('DESC')
    }
    if(order === 'DESC') {
      sorted = [...books].sort((a:any, b:any) => (a[data].toLowerCase() < b[data].toLowerCase() ? 1 : -1));
      setorder('ASC')
    }
    setJSONArray(sorted);
}
  return (
    <div className="d-flex flex-column">
      <div className="d-flex mb-5">
        <div className="form-group col-8 p-0">
            <input data-testid="search" type="Search" name="Search" className="form-control" placeholder="Search" 
             value="" aria-label="search" onChange={setInputValue} />
        </div>
        <div className="col-4 d-flex flex-column">
          <div className={isFilterBtnToggled ? 'position-relative dropup z-index-1 top-0' : 'position-relative'}>
          <button onClick={toggleFilter} className="btn btn-secondary dropdown-toggle w-100 position-absolute top-0" type="button">
            Filter
          </button>
          </div>
          <div className={isFilterBtnToggled ? classNameDropDown + ' show' : classNameDropDown}>
            <div className="form-check form-check-inline d-flex justify-content-between p-2 postion-absolute">
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
      <Table Books={books} sorting={sorting} />
        { loadMoreTupplesToshow < getFilterJSONArray().length ? <button onClick={loadMore}>Load More</button> : '' }
    </div>
  );
}

export default Filter;
