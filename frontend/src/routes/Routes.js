import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home"
import Cities from "../pages/Cities/Cities"
import City from "../components/City/City"
import SignIn from "../components/Form/SignIn"
import SignUp from "../components/Form/SignUp"

function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cities" element={<Cities />} />
      <Route path="city/:id" element={<City />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  )
}

export default RoutesManager
