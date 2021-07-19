import "./App.scss";
import Home from "./pages/homePage/Home";
import SuccessPage from "./pages/succesPage/Success";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/discover"></Route>

        <Route path="/start-project"></Route>

        <Route path="/login">
          <LoginForm />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/project/:projectId/donations/:donationId/status">
          <SuccessPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
