import useForm from "./useForm.js";

function App() {
  const name = useForm();
  return (
    <>
      <label>
        Name: <input {...name} />
      </label>
      {name.value}
    </>
  );
}

export default App;

// import { useCounter } from "./useCounter.js";

// function App() {
//   const count = useCounter();
//   return <h1>Seconds passed: {count}</h1>;
// }

// export default App;
