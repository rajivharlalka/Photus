import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./Components/Error";
import GetCode from "./Components/GetCode";
import GetFile from "./Components/GetFile";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <GetCode></GetCode>
        </Route>
        <Route path="/image/:code">
          <GetFile></GetFile>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
