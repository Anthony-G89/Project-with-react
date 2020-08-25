import React, { useState } from 'react';
// import Home from "./components/Home";
// import About from "./components/About";
// import Blog from "./components/Blog";
// import Clock from "./components/Clock";
// import Footer from "./components/Footer";
import Modal from "./components/Modal";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {


  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);


  // buttonTest() {
  //   alert("clicked on")
  // }

  return (


    <div>
       {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}  
      <button onClick={() => setShow(true)} className="btnToOpen">Open Model</button>
      <Modal show={show} close={closeModalHandler} />
    </div>
    // <Router>

    // {/* <nav className="navBackground">
    //   <form className="searchForm" >
    //     <input type="search" placeholder="Search" aria-label="Search" />
    //     <button className="searchBtn" type="submit" aria-label="Search button" onClick={this.buttonTest} >Search</button>
    //   </form>
    //   <li className="nav-link navlinks"><Link to="/">Home</Link></li>
    //   <li className="nav-link navlinks"><Link to="/about">About</Link></li>
    //   <li className="nav-link navlinks"><Link to="/blog">Blog</Link></li>
    //   <li className="nav-link navlinks"><Link to="/modal">Modal</Link></li>
    //   <li className="nav-link navlinks"><Link to="clock">Clock</Link></li>
    // </nav>

    // <Clock >
    //   <p className="york">Hello New York</p>
    // </Clock > */}






    //   <Route exact path="/" component={Home} />
    //   <Route path="/about" component={About} />
    //   <Route path="/blog" component={Blog} />
    //   <Route path="/modal" component={Modal} />
    //   {/* <Route path="/clock" component={Clock} /> */}

    //   <Route component={Footer} />
    // </Router>

  );


}

export default App;
