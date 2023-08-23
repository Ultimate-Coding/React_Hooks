import React, { Fragment } from "react";

import SlowList from "./components/SlowList";
import OptimizedSlowList from "./components/OptimizedSlowList";

function App() {
  return (
    <Fragment>
      <SlowList />
      {/* <OptimizedSlowList /> */}
    </Fragment>
  );
}

export default App;
