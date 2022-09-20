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
            <li className={props.innerListHeaderClass} key={getId()}>
              {props.content ? (
                <props.content
                  content={node.content}
                  key={getId()}
                />
              ) : (
                node.content
              )}
            </li>
            <ul className={props.innerListClass} key={getId()}>
              {node.children.map((i) => traverse(i, level))}
            </ul>
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
    // Main list
    return (
      <ul className={props.className} key={getId()}>
        {list.map((item) => traverse(item))}
      </ul>
    );
  };

  const list = renderList(props.list);

  return list;
};

TreeList.prototype = {
  list: PropTypes.array,
  className: PropTypes.string,
  innerListHeaderClass: PropTypes.string,
  innerListClass: PropTypes.string,
  listItemHeaderClass: PropTypes.string,
  firstItemClass: PropTypes.string,
  listItemClass: PropTypes.string,
  content: PropTypes.elementType.isRequired,
};

TreeList.defaultProps = {
  list: [],
  className: "",
  innerListHeaderClass: "",
  innerListClass: "",
  listItemHeaderClass: "",
  firstItemClass: "",
  listItemClass: "",
};

export default TreeList;
