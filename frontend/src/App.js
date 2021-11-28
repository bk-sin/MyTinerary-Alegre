import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import RoutesManager from "./utils/Routes/Routes"
import Navigation from "./components/Header/Navigation"
import Footer from "./components/Footer/Footer"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function App() {
  return (
    <>
      <Navigation />
      <RoutesManager />
      <Footer />
    </>
  )
}
