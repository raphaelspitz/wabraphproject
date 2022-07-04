import React, { useState } from 'react'
import { Book } from './book';

type ChildProps  = {
  children?: React.ReactNode,
 // handleFilterChange: (arg: string, arg2: string) => void
   Books: Book[],
};

const TopAuthorsTabs: React.FC<ChildProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index:number) => setActiveIndex(index);
  const checkActive = (index:number, className:string) => activeIndex === index ? className : "";
  const [filterTempArray] = useState<Book[]>(props.Books);

  const getFilterJSONArray = () => {
    let filter = filterTempArray.filter((value, index) => {
     return index < 3
    });
    
  return filter
  }
  
  let filterArray:Book[] = getFilterJSONArray();
  return (
    <>
      <div className="tabs mb-5">
        {filterArray.map((value:any,index:any) =>
          <button
            key={index}
            className={`tab ${checkActive(index, "active")}`}
            onClick={() => handleClick(index)}
          >
            {value.author}
          </button>
        )}
      </div>
      <div className="panels">
        {filterArray.map((value:Book,index:any) =>
          <div 
            key={index}
            className={`panel ${checkActive(index, "active")}`}>
            <p>{value.author}</p>
            <p>{value.country}</p>
            <p>{value.imageLink}</p>
            <p>{value.language}</p>
            <p>{value.link}</p>
            <p>{value.pages}</p>
            <p>{value.title}</p>
            <p>{value.year}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default TopAuthorsTabs
