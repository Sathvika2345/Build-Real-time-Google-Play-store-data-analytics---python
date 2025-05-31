
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { generateScatterData } from '@/utils/dataGenerator';

const ScatterPlotChart = () => {
  const data = generateScatterData();
  
  const categoryColors = {
    'Games': '#FF6B6B',
    'Entertainment': '#4ECDC4',
    'Productivity': '#45B7D1',
    'Social': '#96CEB4',
    'Finance': '#FFEAA7',
    'Shopping': '#DDA0DD',
    'Education': '#98D8C8'
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-semibold">{data.appName}</p>
          <p className="text-sm text-gray-600">Category: {data.category}</p>
          <p className="text-sm">Revenue: ${data.revenue.toLocaleString()}</p>
          <p className="text-sm">Installs: {data.installs.toLocaleString()}</p>
          <p className="text-sm">Rating: {data.rating}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis 
            type="number" 
            dataKey="installs" 
            name="Installs"
            tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
          />
          <YAxis 
            type="number" 
            dataKey="revenue" 
            name="Revenue"
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          
          {Object.keys(categoryColors).map(category => (
            <Scatter
              key={category}
              name={category}
              data={data.filter(item => item.category === category)}
              fill={categoryColors[category as keyof typeof categoryColors]}
            />
          ))}
          
          {/* Trendline approximation */}
          <ReferenceLine 
            segment={[
              { x: 1000000, y: 50000 },
              { x: 50000000, y: 800000 }
            ]}
            stroke="#8884d8"
            strokeDasharray="5 5"
            strokeWidth={2}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterPlotChart;
