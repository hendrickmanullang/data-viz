import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Card, Grid, CardActions, Typography } from "@mui/material"
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
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
        <h2>Current price: ${Number.parseFloat(stockPrice[0].price).toFixed(2)}</h2>
        <strong><p>In the News:</p></strong>
          <Grid container rowSpacing={1}>
            <Grid item xs={3}>
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
            </Grid>
          </Grid>
      </>
    )
    } else {
    return (<p>loading...</p>)
  }
}

export default StockDetail
