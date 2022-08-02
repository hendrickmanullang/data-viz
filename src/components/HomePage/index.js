import { TextField } from "@mui/material"

const HomePage = () => {
  return (
  <>
  <h1>Look up a stock:</h1>
  <TextField id="standard-basic" label="Ticker" variant="standard" />
  <button>Submit</button>
  </>
  )
}

export default HomePage
