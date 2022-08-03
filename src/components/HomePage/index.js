import { TextField } from "@mui/material"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

const HomePage = () => {
  return (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    >
  <h1>Look up a stock:</h1>
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
