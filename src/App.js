import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Tracker from './pages/Tracker';
import Dine from './pages/Dine';
import Youtube from './pages/Youtube';
import Netflix from './pages/Netflix';
import JavaScriptProjects from './pages/JavaScriptProjects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Navbar}></Route>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/portfolio" exact component={Portfolio}></Route>
          <Route path="/portfolio/Tracker" component={Tracker}></Route>
          <Route path="/portfolio/Netflix" component={Netflix}></Route>
          <Route path="/portfolio/dine" component={Dine}></Route>
          <Route path="/portfolio/youtube" component={Youtube}></Route>
          <Route
            path="/portfolio/jsprojects"
            component={JavaScriptProjects}
          ></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
      <Route path="/" component={Footer}></Route>
    </BrowserRouter>
  );
}

export default App;
