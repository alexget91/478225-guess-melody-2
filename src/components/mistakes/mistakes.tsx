import * as React from "react";

interface Props {
  count?: number,
}

const Mistakes = (props: Props) => {
  const {count} = props;

  return <div className="game__mistakes">
    {count ? Array.from(new Array(count), (it, i) => <div key={i} className="wrong"></div>) : ``}
  </div>;
};

export default Mistakes;
