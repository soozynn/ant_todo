import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

useDebounce.propTypes = {
  value: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

export default useDebounce;
