import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY

const StockDetail = () => {
const { ticker } = useParams()
const [stock, setStock] = useState(null)

useEffect(() => {
  const url= `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${API_KEY}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => setStock(data))
    .catch((error) => console.error(error))
}, [ticker])

if (stock) {
  return (<p>{stock[0].name}</p>)
  } else {
  return (<p>loading...</p>)
}
}

export default StockDetail
