import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./component/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact='true' path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path = '/signin' component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
