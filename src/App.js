import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import About from './pages/About';
import Contact from './pages/Contact';
import Hours from './pages/Hours';
import Lessons from './pages/Lessons';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename="/Drop_a_nickel">
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/inventory" exact component={Inventory} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/hours" exact component={Hours} />
            <Route path="/lessons" exact component={Lessons} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
