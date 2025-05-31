
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { generateGroupedBarData } from '@/utils/dataGenerator';
import { isTimeInRange } from '@/utils/timeUtils';

const GroupedBarChart = () => {
  const isVisible = isTimeInRange(15, 17); // 3PM to 5PM IST
  const data = generateGroupedBarData();

  if (!isVisible) {
    return (
      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">
            Category Performance Analysis
          </CardTitle>
          <CardDescription>
            Available only between 3:00 PM - 5:00 PM IST
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-gray-400 mb-2">⏰</div>
              <p className="text-gray-600">This chart is available between 3:00 PM - 5:00 PM IST</p>
              <p className="text-sm text-gray-500 mt-2">
                Current time restriction ensures optimal data processing
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-sm text-blue-600">Avg Rating: {payload[0].value}</p>
          <p className="text-sm text-green-600">Reviews: {payload[1].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Top Categories Performance (Rating ≥ 4.0, Size ≥ 10M, Jan Updates)
        </CardTitle>
        <CardDescription>
          Comparing average ratings and review counts for high-performing categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="category" 
                angle={-45}
                textAnchor="end"
                height={100}
                fontSize={12}
              />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                yAxisId="left" 
                dataKey="avgRating" 
                fill="#8884d8" 
                name="Average Rating"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                yAxisId="right" 
                dataKey="totalReviews" 
                fill="#82ca9d" 
                name="Total Reviews (K)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupedBarChart;
