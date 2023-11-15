import { FC, MouseEventHandler } from "react";
import "./Arrow.scss";

import next from "../assets/images/icon-next.svg";
import prev from "../assets/images/icon-prev.svg";

export interface IArrow {
  handler: MouseEventHandler<HTMLImageElement>;
}

const Arrow: FC<IArrow> = (props: IArrow) => {
  return (
    <div className="arrow">
      <img className="arrow__button--disabled" onClick={props.handler} src={prev} alt="Prev"></img>
      <img className="arrow__button" onClick={props.handler} src={next} alt="Next"></img>
    </div>
  );
};

export default Arrow;
