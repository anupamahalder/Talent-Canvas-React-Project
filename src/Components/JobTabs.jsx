import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobDisplay from "./JobDisplay";
const JobTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const tabStyle = "text-xl hover:bg-blue-100 p-2 hover:rounded-md font-semibold text-blue-900 uppercase";
    return (
        <div className="mb-20 mx-auto w-15/16 min-h-screen">
            <Tabs
        selectedIndex={tabIndex}
        onSelect={tabIndex => setTabIndex(tabIndex)}>
        <div className="">
        <TabList>
          <Tab><span className={tabStyle}>All Jobs</span></Tab>
          <Tab><span className={tabStyle}>Full Time Jobs</span></Tab>
          <Tab><span className={tabStyle}>Part Time Jobs</span></Tab>
          <Tab><span className={tabStyle}>On Site Jobs</span></Tab>
          <Tab><span className={tabStyle}>Hybrid Jobs</span></Tab>
          <Tab><span className={tabStyle}>Remote Jobs</span></Tab>
          <Tab><span className={tabStyle}>Intern Jobs</span></Tab>
        </TabList>
        </div>
        <TabPanel>
          <JobDisplay categoryName="alljobs"></JobDisplay>
        </TabPanel>
        <TabPanel>
          <JobDisplay categoryName="fulltime"></JobDisplay>
        </TabPanel>
        <TabPanel>
          <JobDisplay categoryName="parttime"></JobDisplay>
        </TabPanel>
        <TabPanel>
          <JobDisplay categoryName="onsite"></JobDisplay>
        </TabPanel>
        <TabPanel>
          <JobDisplay categoryName="hybrid"></JobDisplay>
        </TabPanel>
        <TabPanel>
          <JobDisplay categoryName="remote"></JobDisplay>
        </TabPanel>
        <TabPanel>
          <JobDisplay categoryName="intern"></JobDisplay>
        </TabPanel>
      </Tabs>
        </div>
    );
};

export default JobTabs;