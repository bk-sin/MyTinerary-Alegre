import {Route, Switch} from "wouter"
import Home from "../../pages/Home/Home"
import Cities from "../../pages/Cities/Cities"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cities" component={Cities} />
    </Switch>
  )
}
