import { useState } from "react";

function multiplerTracker() {
  const [multiplier, setMultiplier] = useState<number>(() => {
    const storedMultiplier = localStorage.getItem("multiplier");
    return storedMultiplier ? parseInt(storedMultiplier, 10) : 0;
  });

  const saveMultiplier = (multiplier: number) => {
    localStorage.setItem("multiplier", multiplier.toString());
    setMultiplier(multiplier);
  };
  return { multiplier, setMultiplier: saveMultiplier };
}
export default multiplerTracker;
