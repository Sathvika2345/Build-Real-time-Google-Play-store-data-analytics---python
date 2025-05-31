
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ScatterPlotChart from '@/components/charts/ScatterPlotChart';
import GroupedBarChart from '@/components/charts/GroupedBarChart';
import TimeSeriesChart from '@/components/charts/TimeSeriesChart';
import { Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Google Play Store Analytics Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time insights into app performance, revenue correlation, and market trends
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Dashboard updates in real-time based on IST timezone</span>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Scatter Plot - Revenue vs Installs */}
          <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                Revenue vs Installs Correlation (Paid Apps)
              </CardTitle>
              <CardDescription>
                Scatter plot showing the relationship between app revenue and install count with category-based color coding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScatterPlotChart />
            </CardContent>
          </Card>

          {/* Grouped Bar Chart */}
          <GroupedBarChart />

          {/* Time Series Chart */}
          <TimeSeriesChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
