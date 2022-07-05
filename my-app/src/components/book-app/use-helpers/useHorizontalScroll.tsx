import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  const elRef = useRef();

  useEffect(() => {
    const el:any = elRef.current;
    if (el) {
      const onWheel = (e:any) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + (e.deltaY * 8) ,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel, {passive: false});
      el.addEventListener('mousedown', (e:any) => {
        e.preventDefault();
        isDown = true;
        el.classList.add('active');
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
      });
      el.addEventListener('mouseleave', () => {
        isDown = false;
        el.classList.remove('active');
      });
      el.addEventListener('mouseup', () => {
        isDown = false;
        el.classList.remove('active');
      });
      el.addEventListener('mousemove', (e:any) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        el.scrollLeft = scrollLeft - walk;
      });
      //return () => el.removeEventListener("wheel", onWheel);
    }

  }, []);
  return elRef;
}