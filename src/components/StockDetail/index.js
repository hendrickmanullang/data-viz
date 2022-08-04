import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StockNews from "../StockNews";
const API_KEY = process.env.REACT_APP_API_KEY

const StockDetail = () => {
  const { ticker } = useParams()
  const [stockPrice , setStockPrice] = useState(null)
  const [stockNews, setStockNews] = useState(null)

  useEffect(() => {
    const priceEndPoint= `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${API_KEY}`
    const newsEndPoint= `https://financialmodelingprep.com/api/v3/stock_news?tickers=${ticker}&limit=5&apikey=${API_KEY}`

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
        <h1>{stockPrice[0].name}, current price: ${stockPrice[0].price}</h1>
        <strong><p>Latest News:</p></strong>
            {
              stockNews.map((article, index) => (
              <StockNews
                key={index}
                title={article.title}
                url={article.url}
              />
              ))
            }
      </>
    )
    } else {
    return (<p>loading...</p>)
  }
}

export default StockDetail
