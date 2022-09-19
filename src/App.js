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
          innerListClass="inner-list"
          innerListHeaderClass="inner-list-header"
          firstItemClass="first-item"
          listItemClass="list-item"
          list={data}
          content={listIcon}
          contentClass="tree-list-content"
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
//           innerListClass="inner-list"
//           innerListHeaderClass="inner-list-header"
//           firstItemClass="first-item"
//           listItemClass="list-item"
//           list={data}
//           contentClass="content-Class"
//           iconOpenClass="open-icon"
//           iconCloseClass="close-icon"
//         />
//       </div>
//     </div>
//   );
// }

export default App;
