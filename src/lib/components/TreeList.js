import React from "react";
import PropTypes from "prop-types";

import { GoPrimitiveDot } from "react-icons/go";

import { makeIdGenerator } from "./utils";
import "./style.css";

const TreeList = (props) => {
  const getId = new makeIdGenerator();

  const renderList = (list) => {
    const traverse = (node) => {
      if (node.children) {
        return (
          <React.Fragment key={getId()}>
            <li className="about-section__list-item" key={getId()}>
              <GoPrimitiveDot
                key={getId()}
                className={`about-section__list-${node.level}-icon`}
              ></GoPrimitiveDot>
              <span key={getId()} className="about-section__link">
                {node.title}
              </span>
            </li>
            <ul className="about-section__list" key={getId()}>
              {node.children.map((i) => traverse(i))}
            </ul>
          </React.Fragment>
        );
      } else {
        return (
          <li className="about-section__list-item" key={getId()}>
            <GoPrimitiveDot
              key={getId()}
              className={`about-section__list-${node.level}-icon`}
            ></GoPrimitiveDot>
            <span className="about-section__link" key={getId()}>
              {node.title}
            </span>
          </li>
        );
      }
    };
    return (
      <ul className="about-section__list" key={getId()}>
        {list.map((item) => traverse(item))}
      </ul>
    );
  };

  const partnersList = renderList(props.list);

  return partnersList;
};

TreeList.prototype = {
  list: PropTypes.array,
  listStyle: PropTypes.array,
  listItemStyle: PropTypes.array,
  innerListItemStyle: PropTypes.array,
};

TreeList.defaultProps = {
  list: [],
  lisStyle: [],
  listItemStyle: [],
  innerLisStyle: [],
  innerListItemStyle: [],
};

export default TreeList;
