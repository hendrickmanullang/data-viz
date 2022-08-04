const StockNews = ({title, url}) => {
  return (
    <>
      <p>{title}</p>
      <a href={url}>read more</a>
    </>
  )
}

export default StockNews
