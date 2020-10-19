import React from "react";
import Star from "./Star";
import PropTypes from "prop-types";
import shortid from "short-id";

const Stars = ({ count }) => {
  if (isNaN(count) || count <= 0 || count > 5) {
    return null;
  }

  const stars = new Array(count).fill(null);
  const starsToRender = stars.map((star) => ({
    _id: shortid.generate(),
    value: star,
  }));

  return (
    <div className="container">
      <ul key={shortid.generate()} className="card-body-stars u-clearfix">
        {starsToRender.map(({ _id }) => {
          return (
            <li key={_id}>
              <Star />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;
