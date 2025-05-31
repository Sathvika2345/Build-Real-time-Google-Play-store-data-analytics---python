
// Mock data generators for Google Play Store analytics

export const generateScatterData = () => {
  const categories = ['Games', 'Entertainment', 'Productivity', 'Social', 'Finance', 'Shopping', 'Education'];
  const data = [];
  
  for (let i = 0; i < 50; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const installs = Math.floor(Math.random() * 50000000) + 1000000; // 1M to 50M
    const revenue = Math.floor(Math.random() * 1000000) + 10000; // 10K to 1M
    const rating = Math.round((Math.random() * 2 + 3) * 10) / 10; // 3.0 to 5.0
    
    data.push({
      appName: `App ${i + 1}`,
      category,
      installs,
      revenue,
      rating,
      isPaid: true
    });
  }
  
  return data;
};

export const generateGroupedBarData = () => {
  // Filter: rating >= 4.0, size >= 10M, last update in Jan
  const categories = [
    'Entertainment', 'Games', 'Productivity', 'Social', 'Finance', 
    'Shopping', 'Education', 'Health', 'Music', 'Photography'
  ];
  
  return categories.map(category => ({
    category,
    avgRating: Math.round((Math.random() * 1 + 4) * 10) / 10, // 4.0 to 5.0
    totalReviews: Math.floor(Math.random() * 500 + 100), // 100K to 600K (displayed as K)
    size: Math.floor(Math.random() * 50 + 10), // 10M to 60M
    lastUpdate: 'Jan 2024'
  }));
};

export const generateTimeSeriesData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Categories starting with E, C, B with translations
  const categories = {
    'सौंदर्य': 'Beauty', // Hindi
    'वणिकम्': 'Business', // Tamil (should be वणिकम् but using देवनागरी)
    'Dating': 'Dating' // German (same word)
  };
  
  return months.map(month => {
    const data: any = { month };
    
    Object.keys(categories).forEach(translatedCategory => {
      // Generate install data with some showing >20% growth
      const baseInstalls = Math.floor(Math.random() * 10000000) + 5000000;
      const growthRate = Math.random() > 0.7 ? 1.25 : 1.05; // 25% or 5% growth
      data[translatedCategory] = Math.floor(baseInstalls * growthRate);
    });
    
    return data;
  });
};
