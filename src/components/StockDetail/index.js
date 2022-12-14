import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button, ButtonGroup, Container, CircularProgress, Stack} from "@mui/material"
import StockNews from "../StockNews"
import LineChart from "../LineChart"
const API_KEY = process.env.REACT_APP_API_KEY

const StockDetail = () => {
  var currentDate = new Date()
  var currentDateISO = currentDate.toISOString().slice(0,10)
  var defaultSearchDate = (new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate())).toISOString().slice(0,10)

  const { ticker } = useParams()
  const [stockPrice, setStockPrice] = useState(null)
  const [stockNews, setStockNews] = useState(null)
  const [stockHistoricalPrice, setStockHistoricalPrice] = useState([])
  const [searchHistoricalStartDate, setHistoricalSearchStartDate] = useState(defaultSearchDate)
  const [date, setDate] = useState([])

  const handleHistoryView = (option) => {
    const monthView = (new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())).toISOString().slice(0,10)
    const fiveYearView = (new Date(currentDate.getFullYear() - 5, currentDate.getMonth(), currentDate.getDate())).toISOString().slice(0,10)
    let viewDate

    switch(option) {
      case 1:
        viewDate = monthView
        break
      case 2:
        viewDate = fiveYearView
        break
      default:
        viewDate = defaultSearchDate
    }
    setHistoricalSearchStartDate(viewDate)
  }

  useEffect(() => {
    const priceEndPoint= `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${API_KEY}`
    const newsEndPoint= `https://financialmodelingprep.com/api/v3/stock_news?tickers=${ticker}&limit=3&apikey=${API_KEY}`
    const historicalPriceEndPoint= `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?from=${searchHistoricalStartDate}&to=${currentDateISO}&apikey=${API_KEY}`

    fetch(priceEndPoint)
      .then((priceResponse) => priceResponse.json())
      .then((priceData) => setStockPrice(priceData))
      .catch((priceError) => console.error(priceError))

    fetch(newsEndPoint)
      .then((newsResponse) => newsResponse.json())
      .then((newsData) => setStockNews(newsData))
      .catch((newsError) => console.error(newsError))

    fetch(historicalPriceEndPoint)
      .then((historicalpPriceResponse) => historicalpPriceResponse.json())
      .then((priceHistoricalData) => {
        setStockHistoricalPrice(priceHistoricalData.historical.map((item) => item.close))
        setDate(priceHistoricalData.historical.map((item) => item.date))
        })
      .catch((historicalPriceError) => console.error(historicalPriceError))

  }, [ticker, currentDateISO, searchHistoricalStartDate])

  if (stockPrice && stockNews) {
    return (
      <>
        <h1>{stockPrice[0].name}</h1>
        <Container>View: <ButtonGroup variant="text" aria-label="stock price time frame">
          <Button onClick={() => handleHistoryView(1)}>Month</Button>
          <Button onClick={() => handleHistoryView()}>Year</Button>
          <Button onClick={() => handleHistoryView(2)}>5 Year</Button>
        </ButtonGroup>
        </Container>
        <LineChart
          price={stockHistoricalPrice}
          date={date}
          symbol={stockPrice[0].symbol}
        />
        <strong><p>In the News:</p></strong>
        <Stack direction="row" spacing={2}>
          {
            (stockNews.length > 0) ?
              (stockNews.map((article, index) =>
                (<StockNews
                  key={index}
                  title={article.title}
                  url={article.url}
                  />)
              )) :
            <p><em>No recent articles</em></p>
          }
        </Stack>
      </>
    )
    } else {
    return (<CircularProgress />)
  }
}

export default StockDetail
