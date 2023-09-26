import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabsData from '../data/TabsData'
import '../styles/ReactTabs.css'
  
  function ReactTabs() {
    return (
      <Tabs className="Tabs">
        <TabList onClick={"border: none"} className="TabList">
          {TabsData.map((tab, index) => (
            <Tab key={index} className="Tab">
              {tab.name}
            </Tab>
          ))}
        </TabList>
        {TabsData.map((tab, index) => (
          <TabPanel key={index} className="TabPanel">
            {tab.cards.map((card) => (
              <div key={card.id} className="Card">
                <h2 className="Title">{card.name}</h2>
                <p className="Price">{card.price}</p>
                <p className="Text">{card.text}</p>
                <button className="BuyButton">{card.button}</button>
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    );
  }

  export default ReactTabs;


   