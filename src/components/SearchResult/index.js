const SearchResults = (
  {
    name,
    symbol,
    stockExchange
  }
) => {

  return (
    <p><strong>{name}</strong> | Symbol: <strong>{symbol}</strong> | <strong>Exchange</strong>: {stockExchange}</p>
  )
}

export default SearchResults
