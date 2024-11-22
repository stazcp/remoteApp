import React, { lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { MortgageStats } from './components/MortgageStats'
import { MortgageTable } from './components/MortgageTable'
import DashedLineChart from './components/Chart'
import './index.css'
import imgChart from './components/imgChart.png'
import { ErrorBoundary } from 'react-error-boundary'

// const Remote = lazy(async () => import('remoteChart/Chart'))

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* <Header /> */}

      {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100">Issuer Dashboard</h1>
          <p className="mt-2 text-gray-400">
            Track your mortgage portfolio performance and metrics
          </p>
        </div>
        <ErrorBoundary fallback={<ImgComponent />}>
          <Suspense fallback={<ImgComponent />}>
            <MortgageStats />
          </Suspense>
        </ErrorBoundary>
        <MortgageTable />
      </main> */}
      {/* <ImgComponent /> */}
      {/* <DashedLineChart /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Remote />
      </Suspense> */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 MortgageSecure. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

const ImgComponent = () => (
  <div className="my-8">
    <img src={imgChart} alt="Chart" className="w-full h-auto" />
  </div>
)

export default App
