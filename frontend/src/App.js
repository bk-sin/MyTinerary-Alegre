import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Routes from "./utils/Routes/Routes"
import Navigation from "./components/Header/Navigation"
import Footer from "./components/Footer/Footer"

export default function App() {
  return (
    <>
      <Navigation />
      <Routes />
      <Footer />
    </>
  )
}
