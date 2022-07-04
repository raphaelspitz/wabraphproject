import React, {useState} from 'react';
import  {tabLabels} from './constant';
import Tabs from './Tabs';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabLabels.CANCEL_AT_ANY_TYME); 

  const onClickTab = (tab:any) => {
    setActiveTab(tab);
  }

  return (
    <div>
      <Tabs activeTabName={activeTab} onClickTab={onClickTab} />
    </div>
  )
}

export default TabComponent
