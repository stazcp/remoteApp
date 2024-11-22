import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const data = [
  { date: '2024-11-01', price: 120 },
  { date: '2024-11-02', price: 125 },
  { date: '2024-11-03', price: 122 },
  { date: '2024-11-04', price: 130 },
  { date: '2024-11-05', price: 128 },
  { date: '2024-11-06', price: 135 },
  { date: '2024-11-07', price: 140 },
  { date: '2024-11-08', price: 138 },
]

const HighchartsLineChart = () => {
  const options = {
    title: {
      text: 'Price Over Time',
    },
    xAxis: {
      categories: data.map((d) => d.date),
    },
    yAxis: {
      title: {
        text: 'Price',
      },
    },
    series: [
      {
        name: 'Price',
        data: data.map((d) => d.price),
        dashStyle: 'Dash',
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default HighchartsLineChart
