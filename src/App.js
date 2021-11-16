import Navigation from "./components/Navigation.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Route, Switch } from "wouter"
import Home from './components/Home'
import Cities from './components/Cities'

export default function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cities' component={Cities} />
      <Route path='/' />
      <Route path='/' />
    </Switch>
    </>
  )
}
