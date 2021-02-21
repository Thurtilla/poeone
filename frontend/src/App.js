//Always there
import Header from './components/header/header';
import Footer from './components/footer/footer';

//CSS and libs
import './assets/css/default.min.css'

//React
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

//Pages
import Home from './components/pages/home/home'
import Topbar from './components/pages/sheets/topbar/Topbar';
import Delve from './components/pages/sheets/delve/Delve';




export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/sheets/delve" render={() => (
          <>
          <Topbar />
          <Delve />
          </>
          )}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
