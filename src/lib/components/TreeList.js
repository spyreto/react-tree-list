import React from "react";
import PropTypes from "prop-types";

import { makeIdGenerator } from "./utils";

const TreeList = (props) => {
  const getId = new makeIdGenerator();

  const renderList = (list) => {
    // Creates the DropDownList Component
    const traverse = (node, level = 0) => {
      if (node.children) {
        level++;
        return (
          <React.Fragment key={getId()}>
            <li className={props.innerListHeaderStyle} key={getId()}>
              {props.content ? (
                <props.content
                  content={node.content}
                  key={getId()}
                  className={props.contentStyle}
                />
              ) : (
                node.content
              )}
            </li>
            <ul className={props.innerListStyle} key={getId()}>
              {node.children.map((i) => traverse(i, level))}
            </ul>
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
    // Main list
    return (
      <ul className={props.className} key={getId()}>
        {list.map((item) => traverse(item))}
      </ul>
    );
  };

  const partnersList = renderList(props.list);

  return partnersList;
};

TreeList.prototype = {
  list: PropTypes.array,
  className: PropTypes.string,
  innerListHeaderStyle: PropTypes.string,
  listItemHeaderStyle: PropTypes.string,
  innerListItemStyle: PropTypes.string,
  firstItemStyle: PropTypes.string,
  listItemStyle: PropTypes.string,
  contentStyle: PropTypes.string,
  content: PropTypes.elementType.isRequired,
};

TreeList.defaultProps = {
  list: [],
  className: "",
  innerListHeaderStyle: "",
  listItemHeader: "",
  innerListItemStyle: "",
  listItemStyle: "",
  lastListItemStyle: "",
  contentStyle: "",
};

export default TreeList;
