import { useState, useEffect } from "react";

interface PartCounterData {
  currentPart: number;
  khatamCount: number;
}

function usePartCounter(): PartCounterData {
  const [partCounterData, setPartCounterData] = useState<PartCounterData>({
    currentPart: 1,
    khatamCount: 0, // Initialize khatamCount to 0
  });

  useEffect(() => {
    const currentDate: Date = new Date();
    currentDate.setHours(23, 59, 59, 999); // Set time to 11:59:59.999 PM

    const startDate: Date = new Date("2020-12-06");
    startDate.setHours(0, 0, 0, 0); // Set time to 12:00:00.000 AM

    const millisecondsPerDay: number = 24 * 60 * 60 * 1000; // Milliseconds in a day

    const daysDifference: number = Math.floor(
      (currentDate.getTime() - startDate.getTime()) / millisecondsPerDay
    );

    // Calculate the current part based on the number of days
    const calculatedPart: number = (daysDifference % 10) + 1;

    // Calculate khatamCount
    const khatamCount: number = Math.floor(daysDifference / 10);

    setPartCounterData({
      currentPart: calculatedPart,
      khatamCount: khatamCount,
    });
  }, []);

  let tempPartCounterData = {
    currentPart: 8,
    khatamCount: 101,
  };

  return partCounterData;
  // return tempPartCounterData;
}

export default usePartCounter;
