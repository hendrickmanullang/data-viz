const SearchResults = (
  {
    name,
    symbol,
  }
) => {

  return (
    <p><strong>{name}</strong> | Symbol: <strong>{symbol}</strong></p>
  )
}

export default SearchResults
