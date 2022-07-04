import React, { useEffect, useRef } from 'react'
import {data} from './mocks';
import { useHorizontalScroll } from './use-helpers/useHorizontalScroll';

const ScrollableHorizontalNav = () => {
  const scrollRef:any = useHorizontalScroll();

  const slideLeft = () => {
    scrollRef.current.scrollLeft += -500;
  };

  const slideRight = () => {
    scrollRef.current.scrollLeft += 500;
  };

  return (
    <div>
      <h4>Slider scrollable nav</h4>
      <div>
        <button onClick={slideLeft}>Left</button>
        <button onClick={slideRight}>Right</button>
      </div>
      <div id="slider" ref={scrollRef}>
        <div className="d-flex ">
          {data.map((item:any,index:any) =>
              <img className="img-scroll-Nav" key={index} src={item.img} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ScrollableHorizontalNav
