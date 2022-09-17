import React, { useState } from "react";
import PropTypes from "prop-types";

//Dropdown icons
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

import { makeIdGenerator } from "./utils";

const DropDownList = (props) => {
  const [listStatus, setListStatus] = useState({});

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
        node.key = `ddl-${getId()}`;
        level++;
        return (
          <React.Fragment key={getId()}>
            <li className={props.innerListHeaderStyle} key={node.key}>
              {/* Renders the appropriate arrow icon */}
              {listStatus[node.key] ? (
                <props.openIcon
                  className="drop-down-list__open-arrow"
                  onClick={() => handleOnClick(node.key)}
                />
              ) : (
                <props.closeIcon
                  className="drop-down-list__close-arrow"
                  onClick={() => handleOnClick(node.key)}
                />
              )}
              {props.content ? (
                <props.content
                  content={node.content}
                  key={getId()}
                  className={props.contenStyle}
                />
              ) : (
                node.content
              )}
            </li>
            {listStatus[node.key] ? (
              <ul className={props.innerListStyle} key={getId()}>
                {node.children.map((i) => traverse(i, level))}
              </ul>
            ) : (
              <></>
            )}
          </React.Fragment>
        );
      } else {
        let firstItem = level > 0 ? props.listItemStyle : props.firstItemStyle;
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

  const partnersList = renderList(props.list);

  return partnersList;
};

DropDownList.prototype = {
  list: PropTypes.array,
  className: PropTypes.string,
  innerListHeaderStyle: PropTypes.string,
  listItemHeaderStyle: PropTypes.string,
  innerListItemStyle: PropTypes.string,
  firstItemStyle: PropTypes.string,
  listItemStyle: PropTypes.string,
  contentStyle: PropTypes.string,
  content: PropTypes.elementType.isRequired,
  openIcon: PropTypes.elementType,
  closeIcon: PropTypes.elementType,
};

DropDownList.defaultProps = {
  list: [],
  className: "",
  innerListHeaderStyle: "",
  listItemHeader: "",
  innerListItemStyle: "",
  listItemStyle: "",
  lastListItemStyle: "",
  contentStyle: "",
  openIcon: () => <FaArrowRight />,
  closeIcon: () => <FaArrowRight />,
};

export default DropDownList;
