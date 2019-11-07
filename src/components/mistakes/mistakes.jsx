import React from "react";
import PropTypes from "prop-types";

const Mistakes = (props) => {
  const {count} = props;

  return <div className="game__mistakes">
    {count ? Array.from(new Array(count), (it, i) => <div key={i} className="wrong"></div>) : ``}
  </div>;
};

Mistakes.propTypes = {
  count: PropTypes.number
};

export default Mistakes;
