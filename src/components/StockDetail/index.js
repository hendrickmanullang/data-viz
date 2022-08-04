import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY

const StockDetail = () => {
const { ticker } = useParams()
const [ stock , setStock] = useState([])

useEffect(() => {
  const url= `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${API_KEY}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => setStock(data))
    .catch((error) => console.error(error))
}, [ticker])

console.log(stock.price)

return (<p>{stock[0].name} | stock price: {stock[0].price}</p>)

}

export default StockDetail
