import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const JobTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const tabStyle = "text-xl hover:bg-blue-100 p-2 hover:rounded-md font-semibold text-blue-900 uppercase";
    return (
        <div className="mb-20 mx-auto w-11/12 h-[600px]">
            <Tabs
        selectedIndex={tabIndex}
        onSelect={tabIndex => setTabIndex(tabIndex)}
      >
        <div className="">
        <TabList>
          <Tab><span className={tabStyle}>All Jobs</span></Tab>
          <Tab><span className={tabStyle}>Full Time Jobs</span></Tab>
          <Tab><span className={tabStyle}>Part Time Jobs</span></Tab>
          <Tab><span className={tabStyle}>On Site Jobs</span></Tab>
          <Tab><span className={tabStyle}>Hybrid Jobs</span></Tab>
          <Tab><span className={tabStyle}>Remote Job</span></Tab>
          <Tab><span className={tabStyle}>Intern Job</span></Tab>
        </TabList>
        </div>
        <TabPanel>
          <div>
            <h1>lorem 12483 hdsahfsdbc</h1>
            <p>hello jaan</p>
          </div>
        </TabPanel>
        <TabPanel>t2t2t2</TabPanel>
        <TabPanel>t2t2t2</TabPanel>
        <TabPanel>t2t2t2</TabPanel>
        <TabPanel>t2t2t2</TabPanel>
        <TabPanel>t2t2t2</TabPanel>
        <TabPanel>Hello</TabPanel>
      </Tabs>
        </div>
    );
};

export default JobTabs;