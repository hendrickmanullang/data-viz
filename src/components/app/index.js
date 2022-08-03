import { BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "../SearchPage";
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
