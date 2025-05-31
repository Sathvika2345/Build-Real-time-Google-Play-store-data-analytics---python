
// Utility functions for time-based chart visibility

export const isTimeInRange = (startHour: number, endHour: number): boolean => {
  // Get current time in IST
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
  const istTime = new Date(now.getTime() + istOffset);
  const currentHour = istTime.getUTCHours();
  
  // For testing purposes, you can uncomment the line below to simulate different times
  // const currentHour = 16; // Simulate 4 PM IST
  
  console.log(`Current IST hour: ${currentHour}, Range: ${startHour}-${endHour}`);
  
  return currentHour >= startHour && currentHour < endHour;
};

export const getCurrentISTTime = (): string => {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(now.getTime() + istOffset);
  
  return istTime.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  });
};
