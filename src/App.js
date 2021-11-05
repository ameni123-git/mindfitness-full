import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Editformation from './components/Editformation';
import Addformation from './components/Addformation';
function App() {
  return (
      <Router>
      <div className="container">
      <br/>
      <Route path="/" exact component={Dashboard} />
      <Route path="/edit/:id" component={Editformation} />
      <Route path="/create" component={Addformation} />
      </div>
    </Router>
  );
}

export default App;
