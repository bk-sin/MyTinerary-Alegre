import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Route, Switch } from "wouter"
import Home from './components/Home'
import Cities from './components/Cities'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cities' component={Cities} />
      <Route path='/' />
      <Route path='/' />
    </Switch>
    </>
  )
}
