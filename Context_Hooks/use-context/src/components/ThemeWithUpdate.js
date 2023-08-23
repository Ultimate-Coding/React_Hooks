import React, { useState, createContext, useContext, Fragment } from "react";

const ThemeContext = createContext("grey");

export default function ThemeWithUpdate() {
  const [theme, setTheme] = useState("black");
  return (
    <Fragment>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SignUp />
      </ThemeContext.Provider>
      <LogIn />
    </Fragment>
  );
}

function SignUp() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme }}>
      <button onClick={() => setTheme("red")}>ChangeBackground</button>
      <br />
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
