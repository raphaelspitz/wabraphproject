import React, { useEffect, useRef } from 'react'
import {data} from './mocks';
import { useHorizontalScroll } from './use-helpers/useHorizontalScroll';

const ScrollableHorizontalNav = () => {
  const scrollRef:any = useHorizontalScroll();

  const slideLeft = () => {
    scrollRef.current.classList.add('scroll-smooth');
    scrollRef.current.scrollLeft += -500;
    scrollRef.current.classList.remove('scroll-smooth');
  };

  const slideRight = () => {
    scrollRef.current.classList.add('scroll-smooth');
    scrollRef.current.scrollLeft += 500;
    scrollRef.current.classList.remove('scroll-smooth');
  };

  return (
    <div>
      <h4>Slider scrollable nav test</h4>
      <div className="position-relative">
        <span className="fa fa-chevron-left slider-chevron-left" onClick={slideLeft}></span>
      </div>
      <div className="position-relative d-flex justify-content-end ">
        <span className="fa fa-chevron-right icon-big slider-chevron-left" onClick={slideRight}></span>
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
