import { useState } from "react";

function useForm() {
  const [value, setValue] = useState("");

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
