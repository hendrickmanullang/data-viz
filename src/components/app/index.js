import { BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "../SearchPage";
import StockDetail from "../StockDetail";
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/ticker/:ticker" element={<StockDetail />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
