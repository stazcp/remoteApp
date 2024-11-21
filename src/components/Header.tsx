import React from 'react';
import { Building2, ChevronDown } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Building2 className="h-8 w-8 text-blue-400" />
          <span className="ml-2 text-xl font-semibold text-gray-100">MortgageSecure</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-300 hover:text-gray-100 flex items-center">
            Products
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <button className="text-gray-300 hover:text-gray-100 flex items-center">
            Resources
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </nav>
    </header>
  );
};