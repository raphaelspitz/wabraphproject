import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Table from './Table';
import Books from '../mocks/books.json'
import { Book } from './book';


function Home() {
  const [books, setBooks] = useState<Book[]>(Books);
  const [booksTemp] = useState<Book[]>(Books);
  const [inputText, setInputText] = useState<string>('');
  const [checkboxes, setCheckboxes] = useState<string[]>([]);

  // obliger d'utiliser le useEffect si on veut détecter chaque changement dans le dom
  useEffect(() => {
    let filter = getFilterBooksArray();
    setBooks(filter);
  }, [checkboxes, inputText]);
 

  const getFilterBooksArray = () => {
    let filter = booksTemp.filter(value => {
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
   
  return filter = filter ? filter : booksTemp;
  }

  const searchOnlyFromInput = (value:any) => {
    // if(Object.keys(value).some(k => value[k].includes(inputText.toLowerCase()))) {
    //   console.log(Object.keys(value).some(k => value[k].toLowerCase().includes(inputText.toLowerCase())));
    // }
    return value.author.toLowerCase().includes(inputText.toLowerCase());
  }

  const searchOnlyWithcheckboxes = (value:Book) => {
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

  return (
    <div className="Home">
      <div>
        <Filter handleFilterChange={handleFilterChange} />
        <Table Books={books} />
      </div>
    </div>
  );
}

export default Home;
