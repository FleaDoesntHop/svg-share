import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import ViewBox from "./ViewBox";
import SvgAnimate from "./SvgAnimate";
import SvgTransform from "./SvgTransform";
import "./style.css";
import SvgReact from "./SvgReact";

class App extends Component {
  state = {
    view: ViewBox
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="sidebar">
            <nav className="flex-container flex-c">
              <h1 className="title">SVG动画初探</h1>
              <div className="flex flex-container nav-item flex-s flex-c">
                <Link to="/">svg属性认识</Link>
                <Link to="/svg-animate">svg动画 - animate</Link>
                <Link to="/svg-transform">svg动画 - animateTransform</Link>
                <Link to="/svg-react">svg动画 - 实战</Link>
              </div>
            </nav>
          </div>
          <div className="flex flex-container">
            <Switch>
              <Route path="/svg-animate" component={SvgAnimate} />
              <Route path="/svg-transform" component={SvgTransform} />
              <Route path="/svg-react" component={SvgReact} />
              <Route path="/" component={ViewBox} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
