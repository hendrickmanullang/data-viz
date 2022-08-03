import { useParams } from "react-router-dom";

const StockDetail = () => {
const { ticker } = useParams()

return <p>{ticker}</p>

}

export default StockDetail
