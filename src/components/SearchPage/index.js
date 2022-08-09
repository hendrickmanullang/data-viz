import { TextField } from "@mui/material"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import SearchResults from "../SearchResult"
import Grid from '@mui/material/Grid'
const API_KEY = process.env.REACT_APP_API_KEY

const SearchPage = () => {
  const [queryString, setQueryString] = useState('')
  const [stockList, setStockList] = useState([])
  const url= `https://financialmodelingprep.com/api/v3/search-name?query=${queryString}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`
  const handleSubmit = (e) => {
    e.preventDefault()
    loadCompanySearchResults()
  }

  const loadCompanySearchResults = () => {
    fetch(url)
    .then(response => {return response.json()})
    .then(data => {setStockList(data)})
    .catch((error) => console.error(error))
  }

  return (
  <>
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      >
    <h1>Look up a company:</h1>
    <form onSubmit={handleSubmit}>
    <TextField
      id="standard-basic"
      label="Company name"
      variant="standard"
      onChange={(e) => setQueryString(e.target.value)}
    />
    <Button
      type="submit"
      variant="contained"
      >Search</Button>
    </form>
    </Stack>
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      >
    </Stack>
    <Grid container spacing={0}>
      <Grid item xs={6}>
    {
      stockList.map((stock, index) => (
        <SearchResults
          key={index}
          name={stock.name}
          symbol={stock.symbol}
        />
      ))
    }
      </Grid>
      <Grid item xs={6}>
        <Outlet/>
      </Grid>
    </Grid>
  </>
  )
}

export default SearchPage
