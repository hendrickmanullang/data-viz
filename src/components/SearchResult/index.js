import "./index.css"

const SearchResults = (
  {
    name,
    symbol,
  }
) => {

  return (
    <div className="stock-search">
      <p><strong>Company:</strong> {name}</p>
      <p><strong>Symbol:</strong> {symbol}</p>
    </div>
  )
}

export default SearchResults
