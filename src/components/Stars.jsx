import React from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const Stars = ({ count }) => {
  const validateCount = (count) => {
    if (count > 0) {
      if (!Number.isNaN(parseInt(count))) {
        return true;
      }
    }
  };

  return (
    <>
      {validateCount(count) && (
        <div className="container">
          <ul className="card-body-stars u-clearfix">
            {Array(count).fill(<Star />)}
          </ul>
        </div>
      )}
    </>
  );
};

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;
