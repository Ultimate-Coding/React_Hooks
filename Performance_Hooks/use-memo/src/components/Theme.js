import React, { useState, Fragment, memo, useMemo } from "react";

export default function Theme() {
  const [theme, setTheme] = useState("black");
  const [color, setColor] = useState("black");

  return (
    <Fragment>
      <button onClick={() => setTheme("red")}>Change Background</button>
      <button onClick={() => setColor("red")}>Change Color</button>

      <SignUp theme={theme} />
      <LogIn theme={theme} color={color} />
    </Fragment>
  );
}

const SignUp = memo(function SignUp({ theme }) {
  console.log("SignUp");
  return (
    <div style={{ backgroundColor: theme }}>
      <button>Sign up</button>
    </div>
  );
});

function LogIn({ theme, color }) {
  console.log("LogIn");

  return (
    <div style={{ backgroundColor: theme, color }}>
      <button>Log in</button>
    </div>
  );
}

// import React, { useState, createContext, useContext, Fragment } from "react";

// const ThemeContext = createContext("grey");

// export default function Theme() {
//   const [theme, setTheme] = useState("black");
//   return (
//     <Fragment>
//       <button onClick={() => setTheme("red")}>Change Background</button>
//       <ThemeContext.Provider value={theme}>
//         <SignUp />
//       </ThemeContext.Provider>
//       <LogIn />
//     </Fragment>
//   );
// }

// function SignUp() {
//   const theme = useContext(ThemeContext);
//   return (
//     <div style={{ backgroundColor: theme }}>
//       <button>Sign up</button>
//     </div>
//   );
// }

// function LogIn() {
//   const theme = useContext(ThemeContext);
//   return (
//     <div style={{ backgroundColor: theme }}>
//       <button>Log in</button>
//     </div>
//   );
// }
