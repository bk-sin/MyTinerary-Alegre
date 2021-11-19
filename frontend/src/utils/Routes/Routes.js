import {Route, Switch} from "wouter"
import Home from "../../views/Home/Home"
import Cities from "../../views/Cities/Cities"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cities" component={Cities} />
    </Switch>
  )
}
