import React from "react";
import PropTypes from "prop-types";
import Path from "../../common/path";
import {Link} from "react-router-dom";

const ReplayButton = (props) => {
  const {text, onClick} = props;

  return <Link className="replay" to={Path.INDEX} onClick={onClick}>{text}</Link>;
};

ReplayButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ReplayButton;
