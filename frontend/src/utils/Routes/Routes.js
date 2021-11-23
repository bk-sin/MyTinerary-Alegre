import {Routes, Route} from "react-router-dom"
import Home from "../../pages/Home/Home"
import Cities from "../../pages/Cities/Cities"

function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cities" element={<Cities />} />
    </Routes>
  )
}

export default RoutesManager
