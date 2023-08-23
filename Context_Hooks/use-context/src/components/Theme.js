import React, { useState, createContext, useContext, Fragment } from "react";

const ThemeContext = createContext("grey");

export default function Theme() {
  const [theme, setTheme] = useState("black");
  return (
    <Fragment>
      <button onClick={() => setTheme("red")}>ChangeBackground</button>
      <ThemeContext.Provider value={theme}>
        <SignUp />
      </ThemeContext.Provider>
      <LogIn />
    </Fragment>
  );
}

function SignUp() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme }}>
      <button>Sign up</button>
    </div>
  );
}

function LogIn() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme }}>
      <button>Log in</button>
    </div>
  );
}
