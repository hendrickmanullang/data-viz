import { TextField } from "@mui/material"
import { useEffect, useState } from "react"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
const API_KEY = process.env.REACT_APP_API_KEY

const HomePage = () => {
  const url= `https://financialmodelingprep.com/api/v3/search-name?query=${query_string}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`
  const [stockList, setStockList] = useState([])

  useEffect(() => {
  }, [])

  const loadStocks = () => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setStockList(data)
        }
      )
  }

  return (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    >
  <h1>Look up a company:</h1>
  <TextField id="standard-basic" label="Ticker" variant="standard" />
  <Button
    type="submit"
    variant="contained"
    disabled={true}
    >Search</Button>
  </Stack>
  )
}

export default HomePage
