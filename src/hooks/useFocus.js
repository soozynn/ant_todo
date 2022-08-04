import { useRef } from "react";

const useFocus = () => {
  const ref = useRef();
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  const resetFocus = () => {
    ref.current.value = "";
  };

  return { ref, setFocus, resetFocus };
};

export default useFocus;
