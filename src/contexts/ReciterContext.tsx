import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

// Define the type for the reciter context
interface ReciterContextType {
  selectedReciter: string;
  setSelectedReciter: React.Dispatch<React.SetStateAction<string>>;
}

const ReciterContext = createContext<ReciterContextType | undefined>(undefined);

// Define a custom hook for accessing the reciter context
export const useReciter = (): ReciterContextType => {
  const context = useContext(ReciterContext);
  if (!context) {
    throw new Error("useReciter must be used within a ReciterProvider");
  }
  return context;
};

// Define the props for the ReciterProvider
interface ReciterProviderProps {
  children: ReactNode;
}

// Define the ReciterProvider component
export const ReciterProvider: React.FC<ReciterProviderProps> = ({
  children,
}) => {
  const [selectedReciter, setSelectedReciter] = useState<string>(() => {
    // Initialize from localStorage or use a default value
    const storedReciter = localStorage.getItem("selectedReciter");
    return storedReciter || "Ahmed and Yusuf Muzarza"; // Default reciter
  });

  useEffect(() => {
    // Update localStorage when selectedReciter changes
    localStorage.setItem("selectedReciter", selectedReciter);
  }, [selectedReciter]);

  const value: ReciterContextType = {
    selectedReciter,
    setSelectedReciter,
  };

  return (
    <ReciterContext.Provider value={value}>{children}</ReciterContext.Provider>
  );
};
