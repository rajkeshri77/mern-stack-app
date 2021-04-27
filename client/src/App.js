import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Training from './components/Training';
import Carrer from './components/Carrer';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WebDevelopment from './components/WebDevelopment';
import AppDevelopment from './components/AppDevelopment';
import WebDesign from './components/WebDesign';
import Seo from './components/Seo';
import SocialMedia from './components/SocialMedia';
import WebScrapping from './components/WebScrapping';
import PenetrationTesting from './components/PenetrationTesting';
import ContentWriting from './components/ContentWriting';
import Databases from './components/Databases';
import WebMaintenance from './components/WebMaintenance';
import Chatbots from './components/Chatbot';
import ContactForm from './components/Contact';
import ContactResult from './components/Result';
import Blog from './components/Blog';
import Terms from './components/Terms';
import Policy from './components/Policy';

function App() {
  return (
    <Router>
    <div className="App">
        <Header></Header>
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/team"><Team /></Route>
        <Route path="/training"><Training /></Route>
        <Route path="/carrer"><Carrer /></Route>
        <Route path="/testimonial"><Testimonials /></Route>
        <Route path="/portfolio"><Portfolio /></Route>
        <Route exact path="/services"><Services /></Route>
        <Route path="/services/webdev"><WebDevelopment /></Route>
        <Route path="/services/appdev"><AppDevelopment /></Route>
        <Route path="/services/webdesign"><WebDesign /></Route>
        <Route path="/services/seo"><Seo /></Route>
        <Route path="/services/socialmedia"><SocialMedia /></Route>
        <Route path="/services/webscrapping"><WebScrapping /></Route>
        <Route path="/services/pentest"><PenetrationTesting /></Route>
        <Route path="/services/contentwriting"><ContentWriting /></Route>
        <Route path="/services/databases"><Databases /></Route>
        <Route path="/services/webmaintenance"><WebMaintenance /></Route>
        <Route path="/services/chatbots"><Chatbots /></Route>
        <Route path="/contact"><ContactForm /></Route>
        <Route path="/result"><ContactResult /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/terms"><Terms /></Route>
        <Route path="/policy"><Policy /></Route>
    </Switch>
        <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
