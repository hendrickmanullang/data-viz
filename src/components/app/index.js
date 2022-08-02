import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "../HomePage";
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
