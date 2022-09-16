import React from "react";
import PropTypes from "prop-types";

import { makeIdGenerator } from "./utils";
import "./style.css";

const DropDownList = (props) => {
  const getId = new makeIdGenerator();

  const renderList = (list) => {
    const traverse = (node, level = 0) => {
      if (node.children) {
        return (
          <React.Fragment key={getId()}>
            <li
              className={`tree-list__list-${level}-item ${props.listItemStyle}`}
              key={getId()}
            >
              {props.content ? (
                <props.content
                  content={node.title}
                  key={getId()}
                  className={props.contentStyle}
                />
              ) : (
                node.title
              )}
            </li>
            <ul
              className={`tree-list__list-${++level} ${props.innerListStyle}`}
              key={getId()}
            >
              {node.children.map((i) => traverse(i, level))}
            </ul>
          </React.Fragment>
        );
      } else {
        let lastItem =
          level > 0
            ? `tree-list__last-list-item ${props.lastListItemStyle}`
            : "";
        return (
          <li className={`tree-list__list-${level} ${lastItem}`} key={getId()}>
            {props.content ? (
              <props.content content={node.title} key={getId()} />
            ) : (
              node.title
            )}
          </li>
        );
      }
    };
    return (
      <ul className={`tree-list__list-0 ${props.listStyle}`} key={getId()}>
        {list.map((item) => traverse(item))}
      </ul>
    );
  };

  const partnersList = renderList(props.list);

  return partnersList;
};

DropDownList.prototype = {
  list: PropTypes.array,
  listStyle: PropTypes.string,
  listItemStyle: PropTypes.string,
  innerListItemStyle: PropTypes.string,
  lastListItemStyle: PropTypes.string,
  contentStyle: PropTypes.string,
  content: PropTypes.elementType.isRequired,
};

DropDownList.defaultProps = {
  list: [],
  listStyle: "",
  listItemStyle: "",
  innerListStyle: "",
  innerListItemStyle: "",
  lastListItemStyle: "",
  contentStyle: "",
};

export default DropDownList;
