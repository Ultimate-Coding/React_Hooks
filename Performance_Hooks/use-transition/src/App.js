import React, { Fragment } from "react";

import Transition from "./components/Transition";
import WithoutTransition from "./components/WithoutTransition";

function App() {
  return (
    <Fragment>
      <WithoutTransition />
      <Transition />
    </Fragment>
  );
}

export default App;
