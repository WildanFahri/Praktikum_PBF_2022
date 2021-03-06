import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomFormDemo from './CustomForm/CustomFormDemo';
import GenericContainerDemo from './GenericContainer/GenericContainerDemo';
import LoaderDemo from './LoadDemo/LoaderDemo';
import ProtectedRoutesDemo from './ProtectedRoutes/RequireAuthDemo';
import RefsDemo from './RefsDemo/RefsDemo';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/generic-container" component={GenericContainerDemo} />
        <Route path="/custom-form" component={CustomFormDemo} />
        <Route path="/loader" component={LoaderDemo} />
        <Route path="/require-auth" component={ProtectedRoutesDemo} />
        <Route path="/refs" component={RefsDemo} />
      </Switch>
    </BrowserRouter>
  );
}

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/generic-container">Generic Container</Link></li>
        <li><Link to="/custom-form">Custom Form</Link></li>
        <li><Link to="/loader">Loader</Link></li>
        <li><Link to="/require-auth">Protected Routes</Link></li>
        <li><Link to="/refs">Refs</Link></li>
      </ul>
    </nav>
  )
}

const Home = () => {
  return (
    <div> Welcome Page </div>)
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
