import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
};

// set default property values
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
