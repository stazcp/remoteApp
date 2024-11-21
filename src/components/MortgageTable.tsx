import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const mortgageData = [
  {
    id: 1,
    property: '123 Main St, NYC',
    type: 'Commercial',
    value: '$2.5M',
    rate: '3.5%',
    status: 'Performing',
    trend: 'up',
  },
  {
    id: 2,
    property: '456 Park Ave, LA',
    type: 'Residential',
    value: '$1.2M',
    rate: '4.2%',
    status: 'Performing',
    trend: 'up',
  },
  {
    id: 3,
    property: '789 Oak Rd, CHI',
    type: 'Mixed-Use',
    value: '$3.1M',
    rate: '3.8%',
    status: 'Watch',
    trend: 'down',
  },
  {
    id: 4,
    property: '321 Pine St, SF',
    type: 'Commercial',
    value: '$4.7M',
    rate: '3.2%',
    status: 'Performing',
    trend: 'up',
  },
];

export const MortgageTable = () => {
  return (
    <div className="card p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-100 mb-4">Recent Mortgages</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Property</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {mortgageData.map((mortgage) => (
              <tr key={mortgage.id} className="hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{mortgage.property}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{mortgage.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{mortgage.value}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{mortgage.rate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    mortgage.status === 'Performing' 
                      ? 'bg-emerald-900/50 text-emerald-400' 
                      : 'bg-yellow-900/50 text-yellow-400'
                  }`}>
                    {mortgage.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {mortgage.trend === 'up' ? (
                    <ArrowUpRight className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5 text-red-400" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};