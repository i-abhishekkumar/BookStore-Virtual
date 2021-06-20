import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rate, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            rate >= 1
              ? "fa fa-star"
              : rate >= 0.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            rate >= 2
              ? "fa fa-star"
              : rate >= 1.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            rate >= 3
              ? "fa fa-star"
              : rate >= 2.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            rate >= 4
              ? "fa fa-star"
              : rate >= 3.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            rate >= 5
              ? "fa fa-star"
              : rate >= 4.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>

      <span>{text && text}</span>
    </div>
  );
};
Rating.defaultProps = {
  color: "#f8e825",
};
Rating.protoTypes = {
  rate: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
