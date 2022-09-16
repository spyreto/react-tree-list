import { GoPrimitiveDot } from "react-icons/go";
import React from "react";
import "./App.css";
import { TreeList } from "./lib";

import aboutOurPartnersData from "./data/aboutOurPartnersData";

function App() {
  const listIcon = (props) => {
    return (
      <React.Fragment>
        <GoPrimitiveDot />
        <span>{props.content}</span>
      </React.Fragment>
    );
  };

  return (
    <div className="app">
      <TreeList
        list={aboutOurPartnersData}
        content={listIcon}
        textInsideLastItemChild={true}
        listStyle="skata"
      />
    </div>
  );
}

export default App;
