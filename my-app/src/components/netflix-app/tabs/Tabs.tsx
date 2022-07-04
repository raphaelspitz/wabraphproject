import React, { ReactNode } from 'react'
import {tabLabels} from './constant'
import { Link } from "react-router-dom";
import './Tabs.css';
//import './App.css';

type ChildProps = {
  activeTabName:string
  onClickTab:(tab:any) => void
}
const Tabs:React.FC<ChildProps> = ({activeTabName, onClickTab}) => {
  const {CANCEL_AT_ANY_TYME, PICK_YOUR_PRICE, WATCH_ANYWHERE} = tabLabels;
  
  const renderTabTitle = (tab:any, isActive:any, icon:any, id:any):ReactNode => {
    return (
      <div onClick={() => onClickTab(tab)}  id={id} 
        className={`tab-item ${isActive && "tab-border"} tab-item tab-border col-3 d-flex flex-column align-items-center`}>
        <i className={icon}></i>
        <p>{tab}</p>
      </div>
    )
  }
  return (
    <div>
      <div className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCEL_AT_ANY_TYME, 
            activeTabName === CANCEL_AT_ANY_TYME, 
            "fas fa-door-open fa-3x", 
            "tab-1"
          )}
        </div>
      </div>
    </div>
  )
}

export default Tabs;

{/* <Link to="/" >
            Book app
</Link> */}

