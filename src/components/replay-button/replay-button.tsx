import * as React from "react";
import Path from "../../common/path";
import {Link} from "react-router-dom";

interface Props {
  text: string,
  onClick: () => void,
}

const ReplayButton = (props: Props) => {
  const {text, onClick} = props;

  return <Link className="replay" to={Path.INDEX} onClick={onClick}>{text}</Link>;
};

export default ReplayButton;
