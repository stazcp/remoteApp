import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, Home, TrendingUp } from 'lucide-react';

const data = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 2780 },
  { month: 'May', value: 1890 },
  { month: 'Jun', value: 2390 },
  { month: 'Jul', value: 3490 },
];

const stats = [
  {
    name: 'Total Portfolio Value',
    value: '$2.4B',
    icon: DollarSign,
    change: '+12.5%',
  },
  {
    name: 'Active Borrowers',
    value: '15.2K',
    icon: Users,
    change: '+4.3%',
  },
  {
    name: 'Properties Financed',
    value: '8.5K',
    icon: Home,
    change: '+7.8%',
  },
  {
    name: 'Average ROI',
    value: '8.2%',
    icon: TrendingUp,
    change: '+2.1%',
  },
];

export const MortgageStats = () => {
  return (
    <div className="card p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <stat.icon className="h-6 w-6 text-blue-400" />
              <span className="text-emerald-400 text-sm font-medium">{stat.change}</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-100">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.name}</p>
          </div>
        ))}
      </div>
      
      <div className="h-[400px]">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Portfolio Performance</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '0.5rem',
                color: '#F3F4F6'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#60A5FA" 
              fill="#2563EB" 
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};