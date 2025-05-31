
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { generateTimeSeriesData } from '@/utils/dataGenerator';
import { isTimeInRange } from '@/utils/timeUtils';

const TimeSeriesChart = () => {
  const isVisible = isTimeInRange(18, 21); // 6PM to 9PM IST
  const data = generateTimeSeriesData();

  if (!isVisible) {
    return (
      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">
            Install Trends Over Time (E/C/B Categories)
          </CardTitle>
          <CardDescription>
            Available only between 6:00 PM - 9:00 PM IST
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-gray-400 mb-2">🌙</div>
              <p className="text-gray-600">This chart is available between 6:00 PM - 9:00 PM IST</p>
              <p className="text-sm text-gray-500 mt-2">
                Evening analytics for detailed trend analysis
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const categoryColors = {
    'सौंदर्य': '#FF69B4', // Beauty in Hindi
    'வணிகம்': '#32CD32', // Business in Tamil  
    'Dating': '#FF4500'   // Dating in German
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value.toLocaleString()} installs
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Install Growth Trends (Filtered Categories: E/C/B, 500+ Reviews)
        </CardTitle>
        <CardDescription>
          Time series showing install trends with growth highlighting (>20% MoM growth shaded)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                {Object.entries(categoryColors).map(([category, color]) => (
                  <linearGradient key={category} id={`color${category}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              
              {Object.entries(categoryColors).map(([category, color]) => (
                <Area
                  key={category}
                  type="monotone"
                  dataKey={category}
                  stackId="1"
                  stroke={color}
                  fill={`url(#color${category})`}
                  strokeWidth={2}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
          <p><strong>Filter Criteria:</strong> Apps with 500+ reviews, names not starting with X/Y/Z, categories starting with E/C/B</p>
          <p><strong>Translations:</strong> Beauty → सौंदर्य (Hindi), Business → வணிகம் (Tamil), Dating → Dating (German)</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeSeriesChart;
