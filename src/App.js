import './App.css';
import Navbar from './fragments/Navbar';
import Header from './fragments/Header';
import Footer from './fragments/Footer';
import Home from './Home';
import About from './About';
import ContactUs from './Contact';
import Notfound from './Notfound';
import { Switch, Route } from 'react-router-dom';


function App() {
  console.log('test')
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/notfound" component={Notfound} />
        </Switch>

      </div>

      <Footer />
    </>
  );
}

export default App;
