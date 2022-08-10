import Chart from 'react-apexcharts'

const LineChart = ({price, date, symbol}) => {

  const series = [ //data on the y-axis
    {
      name: `${symbol}`,
      data: [...price].reverse() // endpoint outputs date and price in reverse chronological order
    }
  ];

  const options = { //data on the x-axis
    chart: { id: 'stock price time series'},
    xaxis: {
      categories: [...date].reverse() // endpoint outputs date and price in reverse chronological order
    }
  };

    return (
      <Chart
        options={options}
        series={series}
        type="line"
        width={900}
        height={320} />
    )
}

export default LineChart
