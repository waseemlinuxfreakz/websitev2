// In your App.js or any other component file

// Import necessary components from react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components or pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// Define your main component with the Router and Routes
function App() {
  return (
    <Router>
      <Switch>
        {/* Each Route component defines a route and its corresponding component */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
