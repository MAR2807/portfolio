
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { AnimatePresence} from 'framer-motion';

function App() {
 // let location = useLocation();
  return (
    <Router>
        <div className="App">
          <div className = "content">
            <AnimatePresence>
            <Switch >
              <Route exact path ="/">
                <body >
                <Home />
                </body>
              </Route>

            

            </Switch>
            </AnimatePresence>
          </div>
          
        </div>
    </Router>
  );
}

export default App;
