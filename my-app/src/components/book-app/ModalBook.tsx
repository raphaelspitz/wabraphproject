import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
type ChildProps  = {
  children?: React.ReactNode,
  open: boolean,
  onClose: () => void,
  container: HTMLElement,
};
const ModalBook: React.FC<ChildProps> = ({children, open, onClose, container}) => {
  const classNameModal = 'modal fade show';
  
  useEffect(() => {
    if(open) 
      document.body.style.overflow = "hidden";
  }, [open])

  if(!open) {
    document.body.style.overflow = "scroll";
    return null;
  } 

  return ReactDom.createPortal (
    <div data-testid="modal-book">
      <div className="modal-backdrop fade show"></div>
        <div className={open ? classNameModal +' d-block' : ''} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog ">
            <div className="modal-content modal-overflow">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" onClick={onClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {children}
              </div>
              <div className="modal-footer">
                <button data-testid="close" type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
    </div>,
    container
  )
}

export default ModalBook
