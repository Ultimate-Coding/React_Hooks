import React, { Fragment } from "react";

import Form from "./components/Form";
import List from "./components/List";
import InitializerFun from "./components/InitializerFun";

function App() {
  return (
    <Fragment>
      <Form />
      <List />
      <InitializerFun />
    </Fragment>
  );
}

export default App;
