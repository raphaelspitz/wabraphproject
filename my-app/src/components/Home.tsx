import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Table from './Table';
import Books from '../mocks/books.json'

function Home() {
  const [books, setBooks] = useState(Books);
  const [booksTemp] = useState(Books);
  const [inputText, setInputText] = useState<string>('');
  const [checkboxes, setCheckboxes] = useState<string[]>([]);

  useEffect(() => {
   let filter = booksTemp.filter(value => {
     // si toutes les checkbox sont vide mais qu'on fait une recherche que avec input
     if(checkboxes.length == 0 && inputText.length >= 0) {
       return value.author.toLowerCase().includes(inputText.toLowerCase());
     }
    //ici on doit gérer si 1 ou plusieurs checkbox sont cliqués mais que input text est vide
      if(checkboxes.length > 0 && inputText.length == 0) {
        for (let index = 0; index < checkboxes.length; index++) {
          if(value.country.toLowerCase() == checkboxes[index].toLowerCase())
            return (value.country.toLowerCase() == checkboxes[index].toLowerCase());
        }
      } 
      // si une ou plusieurs checkbox sont cliqué et que inputext est pas vide
      if(checkboxes.length > 0 && inputText.length > 0)  {
          for (let index = 0; index < checkboxes.length; index++) {
            if(value.country.toLowerCase() == checkboxes[index].toLowerCase() && 
            (value.author.toLowerCase().includes(inputText.toLowerCase()))
            )
              return (value.country.toLowerCase() == checkboxes[index].toLowerCase())
              && (value.author.toLowerCase().includes(inputText.toLowerCase()))
          }
      }    
  });
  
  filter = filter ? filter : booksTemp;
  setBooks(filter);
  
  }, [checkboxes, inputText])

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
