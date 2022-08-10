import Stack from "@mui/material/Stack"
import { Link } from "react-router-dom"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box, Container } from "@mui/material"

const SearchResults = (
  {
    name,
    symbol,
  }
) => {

  return (
    <Stack direction="row" justifyContent="space-between" spacing={1}>
      <Container>{name} <strong>({symbol})</strong></Container>
      <Link to={`/${symbol}`}><KeyboardArrowRightIcon/></Link>
    </Stack>
  )
}

export default SearchResults
