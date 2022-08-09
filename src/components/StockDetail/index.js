import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ButtonGroup, Card, CardActions, Stack, Typography } from "@mui/material"
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import LineChart from "../LineChart"
const API_KEY = process.env.REACT_APP_API_KEY

const StockDetail = () => {
  var currentDate = new Date()
  var currentDateISO = currentDate.toISOString().slice(0,10)
  var defaultSearchDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate())
  var defaultSearchDateISO = defaultSearchDate.toISOString().slice(0,10)

  const { ticker } = useParams()
  const [stockPrice, setStockPrice] = useState(null)
  const [stockNews, setStockNews] = useState(null)
  const [stockHistoricalPrice, setStockHistoricalPrice] = useState([])
  // const [searchHistoricalStartDate, setHistoricalSearchStartDate] = useState(currentDate) -> add a method here to
  const [date, setDate] = useState([])

  useEffect(() => {
    const priceEndPoint= `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${API_KEY}`
    const newsEndPoint= `https://financialmodelingprep.com/api/v3/stock_news?tickers=${ticker}&limit=3&apikey=${API_KEY}`
    const historicalPriceEndPoint= `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?from=${defaultSearchDateISO}&to=${currentDateISO}&apikey=${API_KEY}`

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

  }, [ticker, currentDateISO, defaultSearchDateISO])

  if (stockPrice && stockNews) {
    return (
      <>
        <h1>{stockPrice[0].name}</h1>
        View: <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={() => console.log("month")}>Month</Button>
          <Button onClick={() => console.log("year")}>Year</Button>
          <Button onClick={() => console.log("5 Year")}>5 Year</Button>
        </ButtonGroup>
        <LineChart
          price={stockHistoricalPrice}
          date={date}
        />
        <strong><p>In the News:</p></strong>
        <Stack direction="row" spacing={2}>
          {
            stockNews.map((article, index) => (
            <Card sx={{ width: '100%' }} key={index}>
              <CardContent>
              <Typography variant="body2" color="text.secondary">
                {article.title}
              </Typography>
                <CardActions>
                  <Button size="small" href={article.url}>Read More</Button>
                </CardActions>
              </CardContent>
            </Card>
            ))
          }
        </Stack>
      </>
    )
    } else {
    return (<p>loading...</p>)
  }
}

export default StockDetail
