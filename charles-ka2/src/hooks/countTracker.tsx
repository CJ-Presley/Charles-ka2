import { useState } from "react";

const useCountTracker = () => {
  const [count, setCount] = useState<number>(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  const saveCount = (count: number) => {
    localStorage.setItem("count", count.toString());
    setCount(count);
  };

  return { count, setCount: saveCount };
};

export default useCountTracker;
