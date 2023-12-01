import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface CountContextProps {
  count: number;
  setCount: (count: number) => void;
}

const CountContext = createContext<CountContextProps | null>(null);

const useCountTracker = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCountTracker must be used within a CountProvider");
  }
  return context;
};

interface CountProviderProps {
  children: ReactNode;
}

const CountProvider: React.FC<CountProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export { useCountTracker, CountProvider, CountContext };
