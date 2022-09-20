import React, { useState } from "react";
import PropTypes from "prop-types";

//Dropdown icons
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

import { makeIdGenerator, setListKeys } from "./utils";

const DropDownList = (props) => {
  const [listStatus, setListStatus] = useState({});

  console.log(setListKeys(props.list));

  const getId = new makeIdGenerator();

  //Hadle onClick event in the list's arrow icon
  const handleOnClick = (key = "ddl-main") => {
    const newListStatus = Object.assign({}, listStatus);
    // If the element has not been clicked before,
    // it means that the list is closed
    newListStatus.hasOwnProperty(key)
      ? (newListStatus[key] = !listStatus[key])
      : (newListStatus[key] = true);
    setListStatus(newListStatus);
  };

  // Creates the DropDownList Component
  const renderList = (list) => {
    const traverse = (node, level = 0) => {
      if (node.children) {
        level++;
        return (
          <React.Fragment key={getId()}>
            <li className={props.innerListHeaderClass} key={node.key}>
              {/* Renders the appropriate arrow icon */}
              {listStatus[node.key] ? (
                <props.closeIcon
                  className={props.iconOpenClass}
                  onClick={() => handleOnClick(node.key)}
                />
              ) : (
                <props.openIcon
                  className={props.iconCloseClass}
                  onClick={() => handleOnClick(node.key)}
                />
              )}
              {props.content ? (
                <props.content
                  content={node.content}
                  key={getId()}
                  className={props.contenClass}
                />
              ) : (
                node.content
              )}
            </li>
            {listStatus[node.key] ? (
              <ul className={props.innerListClass} key={getId()}>
                {node.children.map((i) => traverse(i, level))}
              </ul>
            ) : (
              <></>
            )}
          </React.Fragment>
        );
      } else {
        let firstItem = level > 0 ? props.listItemClass : props.firstItemClass;
        return (
          <li className={firstItem} key={getId()}>
            {props.content ? (
              <props.content content={node.content} key={getId()} />
            ) : (
              node.content
            )}
          </li>
        );
      }
    };
    return (
      // Main list
      <ul className={props.className} key="ddl-main">
        {/* Creating the list recursively */}
        {list.map((item) => traverse(item))}
      </ul>
    );
  };

  const list = renderList(setListKeys(props.list));

  return list;
};

DropDownList.prototype = {
  list: PropTypes.array,
  className: PropTypes.string,
  innerListHeaderClass: PropTypes.string,
  innerListClass: PropTypes.string,
  firstItemClass: PropTypes.string,
  listItemClass: PropTypes.string,
  iconOpenClass: PropTypes.string,
  iconCloseClass: PropTypes.string,
  content: PropTypes.elementType.isRequired,
  openIcon: PropTypes.elementType,
  closeIcon: PropTypes.elementType,
};

DropDownList.defaultProps = {
  list: [],
  className: "",
  innerListHeaderClass: "",
  innerListClass: "",
  firstItemClass:"",
  listItemClass: "",
  lastListItemClass: "",
  iconOpenClass: "",
  iconCloseClass: "",
  openIcon: (props) => (
    <FaArrowRight className={props.className} onClick={props.onClick} />
  ),
  closeIcon: (props) => (
    <FaArrowDown className={props.className} onClick={props.onClick} />
  ),
};

export default DropDownList;
