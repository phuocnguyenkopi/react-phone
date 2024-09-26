import { memo } from "react";

import classes from "./heading.module.css";

function Heading({ heading, pre }) {
  return (
    <div className={classes.heading}>
      <div className={classes.leftHeading}>{heading}</div>
      <div>
        {pre}
        <span className={classes.pre}> {heading}</span>
      </div>
    </div>
  );
}

export default memo(Heading);
