import React from 'react';
import { Header } from './components/Header';
import { MortgageStats } from './components/MortgageStats';
import { MortgageTable } from './components/MortgageTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100">Issuer Dashboard</h1>
          <p className="mt-2 text-gray-400">Track your mortgage portfolio performance and metrics</p>
        </div>
        
        <MortgageStats />
        <MortgageTable />
      </main>
      
      <footer className="bg-gray-800 border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 MortgageSecure. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;