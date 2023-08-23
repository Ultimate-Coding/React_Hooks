import React, { Fragment } from "react";
import Counter from "./components/Counter";
import Watch from "./components/Watch";
import FocusingTextInput from "./components/FocusingTextInput";
import CustomTextInput from "./components/CustomTextInput";

function App() {
  return (
    <Fragment>
      <Counter />
      <Watch />
      <FocusingTextInput />
      <CustomTextInput />
    </Fragment>
  );
}

export default App;
