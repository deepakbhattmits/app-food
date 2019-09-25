import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import createBrowserHistory from "./history"
import Header from "./Header"
import Footer from './Footer'
import CompA from "./CompA"
import CompB from "./CompB"
import CompC from "./CompC"
import CompD from "./CompD"
import RegisterComponent from './RegisterComponent'
import Login from './Login'
import NotFound from "./NotFound"
import Favourite from "./Favourite"
const App = () => {
  return (
    <div className="App">
      <Router history={createBrowserHistory}>
        <header>
          <Header />
        </header>
        <article>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={RegisterComponent} />
            <Route path="/home/:data" component={CompA} />
            <Route path="/list" component={CompB} />
            <Route path="/shop/:id" component={CompC} />
            <Route path="/detail/:id" component={CompD} />
            <Route path="/fav" component={Favourite} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </article>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};
export default App;
