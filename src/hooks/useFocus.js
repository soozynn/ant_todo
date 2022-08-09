import { useRef } from "react";

const useFocus = () => {
  const ref = useRef();
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  const resetValue = () => {
    ref.current.value = "";
  };

  return { ref, setFocus, resetValue };
};

export default useFocus;
