import { TextField } from "@mui/material"
import { useEffect, useState } from "react"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
const API_KEY = process.env.REACT_APP_API_KEY

const HomePage = () => {
  const [queryString, setQueryString] = useState('')
  const [stockList, setStockList] = useState([])
  const url= `https://financialmodelingprep.com/api/v3/search-name?query=meta&limit=10&exchange=NASDAQ&apikey=${API_KEY}`

  useEffect(() => {
    fetch(url)
    .then(response => {return response.json()})
    .then(data => {setStockList(data)})
    .catch((error) => console.error(error))
  }, [])

  return (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    >
  <h1>Look up a company:</h1>
  {/* <form onSubmit={handleSubmit}> */}
  <TextField
    id="standard-basic"
    label="Company name"
    variant="standard"
    onChange={setQueryString}
  />
  <Button
    type="submit"
    variant="contained"
    >Search</Button>
  {/* </form> */}
  {
    stockList.map(stock => (
      <p>{stock.symbol}</p>
    ))
  }
  </Stack>
  )
}

export default HomePage
