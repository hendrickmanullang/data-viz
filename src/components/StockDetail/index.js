import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StockNews from "../StockNews";
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
const API_KEY = process.env.REACT_APP_API_KEY

const StockDetail = () => {
  const { ticker } = useParams()
  const [stockPrice , setStockPrice] = useState(null)
  const [stockNews, setStockNews] = useState(null)

  useEffect(() => {
    const priceEndPoint= `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${API_KEY}`
    const newsEndPoint= `https://financialmodelingprep.com/api/v3/stock_news?tickers=${ticker}&limit=3&apikey=${API_KEY}`

    fetch(priceEndPoint)
      .then((priceResponse) => priceResponse.json())
      .then((priceData) => setStockPrice(priceData))
      .catch((priceError) => console.error(priceError))

    fetch(newsEndPoint)
      .then((newsResponse) => newsResponse.json())
      .then((newsData) => setStockNews(newsData))
      .catch((newsError) => console.error(newsError))

  }, [ticker])

  if (stockPrice && stockNews) {
    return (
      <>
        <h1>{stockPrice[0].name}</h1>
        <h2>Current price: ${stockPrice[0].price}</h2>
        <strong><p>Latest News:</p></strong>
          {
            stockNews.map((article, index) => (
            <Card sx={{ maxWidth: 275 }}>
              <CardContent>
              <StockNews
                key={index}
                title={article.title}
                url={article.url}
              />
              </CardContent>
            </Card>
            ))
          }
      </>
    )
    } else {
    return (<p>loading...</p>)
  }
}

export default StockDetail
