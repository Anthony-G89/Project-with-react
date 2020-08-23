import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Clock from "./components/Clock";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {

  buttonTest() {
    alert("clicked on")
  }



  render() {

    return (


      <Router>
        <div >

          <nav className="navBackground">
            <form className="searchForm" >
              <input type="search" placeholder="Search" aria-label="Search" />
              <button className="searchBtn" type="submit" aria-label="Search button" onClick={this.buttonTest} >Search</button>
            </form>
            <li className="nav-link navlinks"><Link to="/">Home</Link></li>
            <li className="nav-link navlinks"><Link to="/about">About</Link></li>
            <li className="nav-link navlinks"><Link to="/blog">Blog</Link></li>
            {/* <li className="nav-link navlinks"><Link to="clock">Clock</Link></li> */}
          </nav>

          <Clock >
            <p className="york">Hello New York</p>
          </Clock >

        </div>


        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        {/* <Route path="/clock" component={Clock} /> */}

        <Route component={Footer} />
      </Router>

    );

  }
}

export default App;
