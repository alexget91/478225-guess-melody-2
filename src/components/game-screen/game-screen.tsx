import * as React from "react";
import Header from "../header/header";

interface Props {
  children?: React.ReactElement,
  type: string,
  mistakes?: number,
  time: number,
  onTimeChange: () => void,
}

const GameScreen = (props: Props) => {
  const {children, type, mistakes, time, onTimeChange} = props;

  return <section className={`game game--${type}`}>
    <Header mistakes={mistakes} time={time} onTimeChange={onTimeChange}/>
    {children}
  </section>;
};

export default GameScreen;
