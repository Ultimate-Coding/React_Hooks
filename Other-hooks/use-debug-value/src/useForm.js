import { useDebugValue, useState } from "react";

function useForm() {
  const [value, setValue] = useState("");

  useDebugValue(value, (value) => value.toUpperCase());

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const inputProps = {
    value,
    onChange: handleChange,
  };
  return inputProps;
}

export default useForm;
