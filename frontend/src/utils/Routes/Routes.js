import {Routes, Route} from "react-router-dom"
import Home from "../../pages/Home/Home"
import Cities from "../../pages/Cities/Cities"
import Test from "../../pages/Test/Test"
import City from "../../pages/Test/City"
function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cities" element={<Cities />} />
      <Route path="test" element={<Test />} />
      <Route path="city/:id" element={<City />} />
    </Routes>
  )
}

export default RoutesManager
