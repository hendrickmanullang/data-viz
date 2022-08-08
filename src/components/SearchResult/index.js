import "./index.css"
import Stack from "@mui/material/Stack"
import { Link } from "react-router-dom"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SearchResults = (
  {
    name,
    symbol,
  }
) => {

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <p><strong>Company:</strong> {name}</p>
      <p><strong>Symbol:</strong> {symbol}</p>
      <Link to={`/${symbol}`}><KeyboardArrowRightIcon/></Link>
    </Stack>
  )
}

export default SearchResults
