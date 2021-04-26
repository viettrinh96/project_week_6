import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AlertMsg from "./components/AlertMsg";
import AdminLayout from "./routes/AdminLayout";
import PublicLayout from "./routes/PublicLayout";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  return (
    <Router>
      {/* <AlertMsg /> */}
      <Switch>
        <PrivateRoute path="/admin" component={AdminLayout} />
        <Route path="/" component={PublicLayout} />
      </Switch>
    </Router>
  );
}

export default App;
