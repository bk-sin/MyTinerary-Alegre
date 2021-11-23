import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import RoutesManager from "./utils/Routes/Routes"
import Navigation from "./components/Header/Navigation"
import Footer from "./components/Footer/Footer"

export default function App() {
  return (
    <>
      <Navigation />
      <RoutesManager />
      <Footer />
    </>
  )
}
