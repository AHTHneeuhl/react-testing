import { useState } from "react";
import { UseCounterProps } from "./useCounter.types";

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((pCount) => pCount + 1);
  const decrement = () => setCount((pCount) => pCount - 1);
  return { count, increment, decrement };
};
