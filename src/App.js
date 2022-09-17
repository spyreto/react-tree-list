import React from "react";
import { BsFillPencilFill } from "react-icons/bs";

import { TreeList } from "./lib";
import "./App.css";

import data from "./data/data";

function App() {
  const listIcon = (props) => {
    return (
      <React.Fragment>
        <BsFillPencilFill className="list-icon" />
        <span>{props.content}</span>
      </React.Fragment>
    );
  };

  return (
    <div className="app">
      <div className="tree-list-container">
        <h1 className="header">My ToDo List</h1>
        <TreeList
          className="tree-list"
          innerListStyle="inner-list"
          innerListHeaderStyle="inner-list-header"
          firstItemStyle="first-item"
          listItemStyle="list-item"
          list={data}
          content={listIcon}
          contentStyle="content-style"
        />
      </div>
    </div>
  );
}

// import React from "react";

// import { DropDownList } from "./lib";
// import "./App.css";

// import data from "./data/data";

// function App() {
//   return (
//     <div className="app">
//       <div className="tree-list-container">
//         <h1 className="header">My ToDo List</h1>
//         <DropDownList
//           className="tree-list"
//           innerListStyle="inner-list"
//           innerListHeaderStyle="inner-list-header"
//           firstItemStyle="first-item"
//           listItemStyle="list-item"
//           list={data}
//           contentStyle="content-style"
//           iconOpenStyle="open-icon"
//           iconCloseStyle="close-icon"
//         />
//       </div>
//     </div>
//   );
// }

export default App;
