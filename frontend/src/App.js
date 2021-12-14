import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom"
import "./App.css"
import RoutesManager from "./routes/Routes"
import Navigation from "./components/Header/Navigation"
import Footer from "./components/Footer/Footer"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ScrollToTop from "./components/Scroll/ScrollToTop"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <ToastContainer autoClose={5000} />
        <RoutesManager />
        <Footer />
      </BrowserRouter>
    </>
  )
}
